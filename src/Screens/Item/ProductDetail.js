import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import reviewData from '../../../assets/data/review.json'; // JSON review nội bộ

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = width;

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const [selectedSize, setSelectedSize] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [review, setReview] = useState(null);

  const images = product.image_paths?.length > 0
    ? product.image_paths
    : product.image
    ? [product.image]
    : [];

  const priceValue = parseFloat((product.price || '').replace(/[^0-9.-]+/g, '')) || 0;
  const VAT = 5;
  const totalPrice = (priceValue * (1 + VAT / 100)).toFixed(2);

  useEffect(() => {
    const matchedReview = reviewData.find(r => r.id === '1');
    if (matchedReview) {
      setReview(matchedReview);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize) {
      Alert.alert('Please select a size before adding to cart.');
      return;
    }

    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      Alert.alert(
        'Success',
        `Added ${product.name} (Size: ${selectedSize}) to cart at $${totalPrice}`,
        [
          { text: 'Continue Shopping', style: 'cancel' },
          { text: 'View Cart', onPress: () => navigation.navigate('Cart') },
        ]
      );
    }, 1000);
  };

  const goToReviews = () => {
    navigation.navigate('ListReview', { productId: product.id });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="bag-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Image */}
      <Image
        source={{ uri: images[selectedImageIndex] }}
        style={{ width: '100%', height: IMAGE_HEIGHT }}
        resizeMode="contain"
      />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 200 }}>
        {/* Source + Price + Name (căn giống ảnh bạn gửi) */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 10 }}>
        {/* Left: Product info (70%) */}
        <View style={{ flex: 7 }}>
            <Text style={{ color: '#888', fontSize: 14, marginBottom: 2 }}>
            {product.source || "Men's Printed Pullover Hoodie"}
            </Text>
            <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>{product.name}</Text>
        </View>

        {/* Right: Price (30%) */}
        <View style={{ flex: 3, alignItems: 'flex-end' }}>
            <Text style={{ color: '#888', fontSize: 12 }}>Price</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'black' }}>{product.price}</Text>
        </View>
        </View>

        {/* Image Thumbnails */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 15, paddingHorizontal: 15 }}
        >
          {images.map((imgUri, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImageIndex(index)}
              style={{
                marginRight: 10,
                borderWidth: selectedImageIndex === index ? 2 : 0,
                borderColor: '#9775FA',
                borderRadius: 6,
                backgroundColor: '#f2f2f2',
              }}
            >
              <Image
                source={{ uri: imgUri }}
                style={{ width: 80, height: 80, borderRadius: 6 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Size */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, paddingHorizontal: 15 }}>
          <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Size</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ color: 'black' }}>Size Guide</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={product.sizes || ['S', 'M', 'L', 'XL', '2XL']}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedSize(item)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 16,
                backgroundColor: selectedSize === item ? '#9775FA' : '#F5F6FA',
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Text style={{ color: selectedSize === item ? '#fff' : 'black' }}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingHorizontal: 15, marginTop: 10 }}
        />

        {/* Size Guide Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
          }}>
            <View style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 20,
              width: '100%'
            }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                Size Guide
              </Text>
              <Text style={{ color: 'black' }}>
                - S:    150–160 cm | 42–50 kg{'\n'}
                - M:   158–165 cm | 51–60 kg{'\n'}
                - L:    163–172 cm | 61–70 kg{'\n'}
                - XL:  170–178 cm | 71–80 kg{'\n'}
                - 2XL: 175–185 cm | 81–95 kg
                </Text>

              <Pressable
                onPress={() => setModalVisible(false)}
                style={{
                  backgroundColor: '#9775FA',
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 6,
                  alignSelf: 'flex-end',
                  marginTop: 15
                }}
              >
                <Text style={{ color: '#fff' }}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Description */}
        <View style={{ marginTop: 25, paddingHorizontal: 15 }}>
          <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Description</Text>
          <Text style={{ color: '#444', marginTop: 8 }} numberOfLines={readMore ? undefined : 3}>
            {product.description || 'No description provided.'}
          </Text>
          <TouchableOpacity onPress={() => setReadMore(!readMore)}>
            <Text style={{ color: 'black', marginTop: 5, fontWeight: 'bold' }}>
              {readMore ? 'Read Less' : 'Read More..'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Review */}
        {review && (
          <View style={{ marginTop: 25, paddingHorizontal: 15 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Reviews</Text>
              <TouchableOpacity onPress={goToReviews}>
                <Text style={{ color: 'black' }}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 12 }}>
              <Image
                source={{ uri: review.image }}
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: 'black', fontWeight: '600' }}>{review.name}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome name="star" size={14} color="#FFA500" />
                    <Text style={{ color: '#FFA500', marginLeft: 4 }}>{review.rating.toFixed(1)}</Text>
                  </View>
                </View>
                <Text style={{ color: '#888', fontSize: 12, marginTop: 2 }}>{review.date}</Text>
                <Text style={{ color: 'black', marginTop: 4 }}>{review.comment}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        padding: 15
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <View>
            <Text style={{ color: 'black', fontSize: 14 }}>Total Price</Text>
            <Text style={{ color: '#888', fontSize: 12 }}>with VAT, 5%</Text>
          </View>
          <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>${totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: (!selectedSize || isAddingToCart) ? '#9775FA' : '#9775FA',
            paddingVertical: 14,
            borderRadius: 8,
            alignItems: 'center'
          }}
          onPress={handleAddToCart}
          disabled={!selectedSize || isAddingToCart}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            {isAddingToCart ? 'Adding...' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
