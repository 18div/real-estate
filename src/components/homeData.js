import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import card4 from '../images/card4.jpg';
import card5 from '../images/card5.jpg';
import card6 from '../images/card6.jpg';
import card7 from '../images/card7.jpg';
import card8 from '../images/card8.jpg';
import card9 from '../images/card9.jpg';
import card10 from '../images/card10.jpg';
import card11 from '../images/card11.jpg';

const homesData = [
    {
      id: 1,
      title: 'Cozy Cottage',
      description: 'A beautiful cottage in the countryside.',
      city: 'Bristol',
      country: 'England',
      imageSrc: card1, 
      price:'25000000',
      dimensions: {
        rooms: 3,
        balcony: false,
        bathrooms: 2,
      },
      contactDetails: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+44 123 456789',
      },
      longNote: `The Cozy Cottage is a delightful property located in the picturesque countryside of Bristol, England. This charming cottage offers a serene escape from the hustle and bustle of city life. With three spacious rooms and two bathrooms, it provides ample space for a comfortable stay. Although it doesn't feature a balcony, you'll be able to enjoy the stunning natural views right from your windows. The interior is designed with a rustic touch, creating a warm and inviting atmosphere. Whether you're looking for a peaceful getaway or a romantic retreat, the Cozy Cottage is the perfect choice.\n\nFor inquiries and bookings, please contact John Doe at john@example.com or call +44 123 456789.`,
    },
    {
      id: 2,
      title: 'Modern Apartment',
      description: 'A stylish apartment in the city center.',
      city: 'Chicago',
      country: 'USA',
      imageSrc: card2, 
      price:'35000000',
      dimensions: {
        rooms: 2,
        balcony: true,
        bathrooms: 1,
      },
      contactDetails: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '+1 987 654321', // Country code for USA: +1
      },
      longNote: `The Modern Apartment is a chic and contemporary living space situated in the heart of Chicago's vibrant city center. This two-room apartment boasts modern amenities and a stunning view of the urban landscape. With a private balcony, you can enjoy your morning coffee while soaking in the bustling city atmosphere. The apartment includes a well-appointed bathroom and is perfect for individuals or couples looking for an upscale urban experience. Don't miss out on this opportunity to immerse yourself in the city's energy.\n\nFor inquiries and bookings, please contact Jane Smith at jane@example.com or call +1 987 654321.`,
    },
    {
      id: 3,
      title: 'Seaside Villa',
      description: 'A luxurious villa by the beach.',
      city: 'Chennai',
      country: 'India',
      imageSrc: card3, 
      price:'61000000',
      dimensions: {
        rooms: 5,
        balcony: true,
        bathrooms: 3,
      },
      contactDetails: {
        name: 'Raj Kapoor',
        email: 'raj@example.com',
        phone: '+91 98765 43210', 
      },
      longNote: `The Seaside Villa is an opulent retreat nestled by the pristine beaches of Chennai, India. This lavish villa boasts five exquisitely designed rooms, each offering breathtaking views of the sea. With three luxurious bathrooms and a private balcony, you can experience the tranquility of the ocean from the comfort of your own space. The villa's architecture seamlessly blends modern amenities with traditional charm. Whether you're seeking a rejuvenating escape or a serene family vacation, the Seaside Villa provides an unforgettable experience.\n\nFor inquiries and bookings, please contact Raj Kapoor at raj@example.com or call +91 98765 43210.`,
    },
    {
      id: 4,
      title: 'Mountain Cabin',
      description: 'A cozy cabin nestled in the mountains.',
      city: 'Nainital',
      country: 'India',
      imageSrc: card4, 
      price:'12500000',
      dimensions: {
        rooms: 2,
        balcony: true,
        bathrooms: 1,
      },
      contactDetails: {
        name: 'Amit Patel',
        email: 'amit@example.com',
        phone: '+91 98765 12345', // Country code for India: +91
      },
      longNote: `The Mountain Cabin is a charming hideaway tucked away in the picturesque mountains of Nainital, India. This cozy cabin offers a tranquil escape from the daily grind, with two comfortable rooms and a well-designed bathroom. Step out onto your private balcony and take in the breathtaking views of the surrounding natural beauty. The cabin's rustic charm and serene atmosphere make it the perfect spot for nature enthusiasts and couples seeking a romantic retreat.\n\nFor inquiries and bookings, please contact Amit Patel at amit@example.com or call +91 98765 12345.`,
    },
    {
      id: 5,
      title: 'Urban Loft',
      description: 'An industrial-style loft in the heart of the city.',
      city: 'Brasel',
      country: 'Switzerland',
      imageSrc: card5, 
      price:'50000000',
      dimensions: {
        rooms: 1,
        balcony: false,
        bathrooms: 1,
      },
      contactDetails: {
        name: 'Sophie Müller',
        email: 'sophie@example.com',
        phone: '+41 76 543210', 
      },
      longNote: `The Urban Loft is a contemporary loft space located in the vibrant city of Brasel, Switzerland. This open-concept loft features a single room layout with modern industrial design elements. Although it doesn't have a balcony, you'll be captivated by the city's charm right outside your windows. The loft includes a stylish bathroom and is ideal for solo travelers or couples looking for an urban adventure. Experience the city's culture and nightlife from this trendy and convenient location.\n\nFor inquiries and bookings, please contact Sophie Müller at sophie@example.com or call +41 76 543210.`,
    },
    {
      id: 6,
      title: 'Beachfront Bungalow',
      description: 'A charming bungalow steps away from the beach.',
      city: 'Kerela',
      country: 'India',
      imageSrc: card6, 
      price:'56250000',
      dimensions: {
        rooms: 4,
        balcony: true,
        bathrooms: 2,
      },
      contactDetails: {
        name: 'Sunita Menon',
        email: 'sunita@example.com',
        phone: '+91 98765 67890', 
      },
      longNote: `The Beachfront Bungalow is a delightful property nestled along the idyllic beaches of Kerela, India. This charming bungalow offers four cozy rooms with stunning ocean views. Enjoy the luxury of two well-appointed bathrooms and a private balcony that opens up to the soothing sound of the waves. With a blend of traditional and modern design, the bungalow provides a perfect mix of comfort and tranquility. Whether you're seeking a family vacation or a peaceful solo escape, the Beachfront Bungalow is a slice of paradise.\n\nFor inquiries and bookings, please contact Sunita Menon at sunita@example.com or call +91 98765 67890.`,
    },
    {
      id: 7,
      title: 'Rustic Farmhouse',
      description: 'An idyllic farmhouse surrounded by nature.',
      city: 'Perth',
      country: 'Australia',
      imageSrc: card7,
      price:'20000000',
      dimensions: {
        rooms: 6,
        balcony: true,
        bathrooms: 3,
      },
      contactDetails: {
        name: 'Emily Wilson',
        email: 'emily@example.com',
        phone: '+61 412 345678', // Country code for Australia: +61
      },
      longNote: `The Rustic Farmhouse is a charming retreat nestled amidst the natural beauty of Perth, Australia. This idyllic farmhouse offers six spacious rooms, each exuding the warmth of rustic design. With three well-appointed bathrooms and a private balcony overlooking the serene surroundings, you'll be able to experience both comfort and tranquility. The farmhouse is a perfect blend of modern amenities and timeless charm, making it an ideal choice for families or groups seeking a memorable getaway.\n\nFor inquiries and bookings, please contact Emily Wilson at emily@example.com or call +61 412 345678.`,
    },
    {
      id: 8,
      title: 'City Skyline Penthouse',
      description: 'A luxurious penthouse with stunning city views.',
      city: 'Nuuk',
      country: 'GreenLand',
      imageSrc: card8, 
      price:'32450000',
      dimensions: {
        rooms: 3,
        balcony: true,
        bathrooms: 2,
      },
      contactDetails: {
        name: 'Erik Hansen',
        email: 'erik@example.com',
        phone: '+299 123456'
      },
      longNote: `The City Skyline Penthouse offers an exclusive urban living experience in the heart of Nuuk, Greenland. This luxurious penthouse features three elegantly designed rooms, each with breathtaking views of the cityscape. With two lavish bathrooms and a private balcony, you can bask in the beauty of both modern luxury and the surrounding natural landscape. The penthouse's sophisticated design and convenient location make it a top choice for discerning travelers seeking a lavish stay.\n\nFor inquiries and bookings, please contact Erik Hansen at erik@example.com or call +299 123456.`,
    },
    {
      id: 9,
      title: 'Lakeview Cabin',
      description: 'A cozy cabin overlooking a serene lake.',
      city: 'Shandong',
      country: 'China',
      imageSrc: card9, 
      price:'54250000',
      dimensions: {
        rooms: 2,
        balcony: true,
        bathrooms: 1,
      },
      contactDetails: {
        name: 'Li Wei',
        email: 'li@example.com',
        phone: '+86 10 87654321', 
        price:'18900000',
      },
      longNote: `The Lakeview Cabin offers a serene escape nestled beside a tranquil lake in Shandong, China. This cozy cabin features two comfortable rooms, allowing you to unwind and embrace the beauty of nature. With a private balcony and a well-appointed bathroom, you can enjoy picturesque lake views and the peaceful ambiance. The cabin's simplicity and natural surroundings make it a perfect choice for those seeking a refreshing retreat away from the hustle and bustle of everyday life.\n\nFor inquiries and bookings, please contact Li Wei at li@example.com or call +86 10 87654321.`,
    },
    {
      id: 10,
      title: 'Historic Manor',
      description: 'A grand historic manor with elegant architecture.',
      city: 'Jaipur',
      country: 'India',
      imageSrc: card10, 
      price:'43200000',
      dimensions: {
        rooms: 8,
        balcony: true,
        bathrooms: 5,
      },
      contactDetails: {
        name: 'Rajesh Gupta',
        email: 'rajesh@example.com',
        phone: '+91 98765 98765', // Country code for India: +91
      },
      longNote: `The Historic Manor is a magnificent estate located in the cultural city of Jaipur, India. This grand manor boasts eight opulent rooms, each showcasing elegant architecture and regal design. With five luxurious bathrooms and a private balcony, you can experience the charm of a bygone era while enjoying modern comfort. The manor's history and aesthetics make it a prime choice for weddings, events, and luxurious getaways, offering an unparalleled experience steeped in sophistication.\n\nFor inquiries and bookings, please contact Rajesh Gupta at rajesh@example.com or call +91 98765 98765.`,
    },
    {
      id: 11,
      title: 'Countryside Retreat',
      description: 'A peaceful retreat in the rural landscape.',
      city: 'Meghalaya',
      country: 'India',
      imageSrc: card11, 
      price:'60000000',
      dimensions: {
        rooms: 4,
        balcony: true,
        bathrooms: 3,
      },
      contactDetails: {
        name: 'Priya Das',
        email: 'priya@example.com',
        phone: '+91 98765 54321', // Country code for India: +91
      },
      longNote: `The Countryside Retreat is a tranquil oasis nestled in the serene landscapes of Meghalaya, India. This charming property offers four cozy rooms with picturesque views of the surrounding nature. With three well-equipped bathrooms and a private balcony, you can fully immerse yourself in the beauty of the countryside. The retreat's peaceful ambiance and natural beauty make it an ideal spot for relaxation, meditation, and getting away from the hustle and bustle of everyday life.\n\nFor inquiries and bookings, please contact Priya Das at priya@example.com or call +91 98765 54321.`,
    },
    
  ];

  export default homesData;