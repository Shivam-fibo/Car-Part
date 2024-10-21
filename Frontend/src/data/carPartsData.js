const carPartsData = [
  {
    id: 'radiators',
    name: 'Radiators',
    description: 'Helps keep the engine cool by transferring heat.',
    image: '/radiator.jpg',
    items: [
      {
        id: 'Duralast Radiator B13067',
        name: 'Standard Radiator',
        description: 'A reliable radiator suitable for most vehicles, providing essential cooling to prevent engine overheating.',
        image: '/img1.avif',
        price: 150.00,
      },
      {
        id: 'Duralast Radiator B1516',
        name: 'Performance Radiator',
        description: 'Engineered for enhanced cooling efficiency, ideal for high-performance applications.',
        image: '/img2.avif',
        price: 250.00,
      }
    ]
  },
  {
    id: 'suspension',
    name: 'Shocks and Struts',
    description: 'Parts of the suspension system that absorb shock and provide stability.',
    image: '/suspension.avif',
    items: [
      {
        id: 'Duralast Loaded Strut Assembly LS53-90921R',
        name: 'Shock Absorbers',
        description: 'Essential components that dampen the impact of road bumps, improving ride comfort and handling.',
        image: '/img3.webp',
        price: 209.00,
      },
      {
        id: 'Duralast Loaded Strut LS54-95161L',
        name: 'Struts',
        description: 'Supports the vehicle’s weight while maintaining ride height and stability during driving.',
        image: '/img4.webp',
        price: 120.00,
      }
    ]
  },
  {
    id: 'catalytic-converters',
    name: 'Catalytic Converters',
    description: 'Reduces harmful emissions by converting exhaust gases into less harmful substances.',
    image: '/catalytic-converter.webp',
    items: [
      {
        id: 'catalytic-1',
        name: 'Catalytic Converter 2.5in 51206',
        description: 'Compliant with emission standards for most vehicles, ensuring cleaner exhaust output.',
        image: '/1mg5.avif',
        price: 195.00,
      },
      {
        id: 'catalytic-2',
        name: 'Catalytic Converter 2.5in 51356',
        description: 'Designed to meet emissions regulations while providing efficient exhaust flow.',
        image: '/1mg5.avif',
        price: 200.00,
      },
    ]
  },
  {
    id: 'brakes',
    name: 'Brakes',
    description: 'Essential for vehicle stopping power and safety.',
    image: '/brakes.jpg',
    items: [
      {
        id: 'brakes-1',
        name: 'Duralast Gold Disc Brake',
        description: 'Delivers superior stopping power and performance under a variety of conditions.',
        image: '/imgv1.avif',
        price: 60.00,
      },
      {
        id: 'brakes-2',
        name: 'Duralast Disc Brake Pad Set MKD914',
        description: 'Engineered for optimal braking performance and reduced noise for a smooth ride.',
        image: '/imgv2.avif',
        price: 41.00,
      }
    ]
  },
  {
    id: 'fuel-system',
    name: 'Fuel System',
    description: 'Ensures proper fuel delivery and combustion efficiency for the engine.',
    image: '/fuel-system.avif',
    items: [
      {
        id: 'fuel-system-1',
        name: 'Techron Fuel System 12oz',
        description: 'Cleans and maintains fuel injectors for improved performance and efficiency.',
        image: '/imgv3.avif',
        price: 15.00,
      },
      {
        id: 'fuel-system-2',
        name: 'CataClean Fuel Cleaner 16.7oz',
        description: 'Enhances fuel system performance by removing carbon deposits and reducing emissions.',
        image: '/a1.avif',
        price: 15.00,
      }
    ]
  },
  {
    id: 'sensors',
    name: 'Sensors',
    description: 'Monitors various aspects of vehicle performance and system efficiency.',
    image: '/sensors.avif',
    items: [
      {
        id: 'sensors-1',
        name: 'Duralast Coolant Temperature Sensor SU201',
        description: 'Monitors the engine coolant temperature for optimal engine performance.',
        image: '/a2.avif',
        price: 25.00,
      }
    ]
  },
  {
    id: 'air-filters',
    name: 'Air Filters',
    description: 'Keeps contaminants out of the engine for optimal performance and longevity.',
    image: '/air-filter.avif',
    items: [
      {
        id: 'air-filters-1',
        name: 'STP Panel Engine Air Filter SA8755',
        description: 'Traps dirt and debris while allowing optimal airflow to the engine.',
        image: '/a4.avif',
        price: 20.00,
      }
    ]
  },
  {
    id: 'ignition-system',
    name: 'Ignition System',
    description: 'Starts the engine by igniting the fuel-air mixture for combustion.',
    image: '/ignition.avif',
    items: [
      {
        id: 'ignition-1',
        name: 'Duralast Direct Ignition Coil C1417',
        description: 'Converts the battery voltage to high voltage for optimal spark generation.',
        image: '/igntion.avif',
        price: 60.00,
      }
    ]
  },
  {
    id: 'interior',
    name: 'Interior Parts',
    description: 'Components for comfort and aesthetics inside the car.',
    image: '/interior.avif',
    items: [
      {
        id: 'Bestop Seat 39429-01',
        name: 'Seats',
        description: 'Provides seating for passengers, enhancing comfort and safety.',
        image: '/seat.avif',
        price: 250.00,
      },
      {
        id: 'interior-2',
        name: 'Black Carpet Floor Mat',
        description: 'Protects the floor of the car while adding comfort and style to the interior.',
        image: '/carpet1.avif',
        price: 20.00,
      },
    ]
  },
  {
    id: 'transmission',
    name: 'Transmission Parts',
    description: 'Enables smooth gear shifting and power delivery from the engine to the wheels.',
    image: '/transmission.avif',
    items: [
      {
        id: 'transmission-1',
        name: 'High Gear Manual Transmission Assembly',
        description: 'Facilitates engagement and disengagement of the engine for smooth driving.',
        image: '/ig1.avif',
        price: 1150.00,
      },
      {
        id: 'transmission-2',
        name: 'High Gear Manual Transmission Assemblys',
        description: 'Transmits engine power to the transmission for efficient performance.',
        image: '/ig2.avif',
        price: 3500.00,
      },
      {
        id: 'transmission-3',
        name: 'High Gear Manual Transmission',
        description: 'Allows the driver to change gears for optimal speed and power.',
        image: '/ig3.avif',
        price: 1300.00,
      }
    ]
  },
  {
    id: 'exterior',
    name: 'Exterior Parts',
    description: 'Components that form the outer structure of the car, enhancing appearance and protection.',
    image: '/ext.webp',
    items: [
      {
        id: 'exterior-1',
        name: 'American Modified Hood',
        description: 'Covers the engine compartment while adding a stylish look to the vehicle.',
        image: '/hood1.avif',
        price: 500.00,
      },
      {
        id: 'exterior-2',
        name: 'Crown Automotive Jeep Hood',
        description: 'Durable hood that protects the engine compartment of your Jeep.',
        image: '/hood2.avif',
        price: 500.00,
      },
    ]
  },
  {
    id: 'wheels',
    name: 'Wheels and Tires',
    description: 'Supports vehicle movement and grip on various surfaces.',
    image: '/wheels.avif',
    items: [
      {
        id: 'wheels-1',
        name: 'LKQ Wheel STLFD065U15N',
        description: 'Designed for durability and performance, offering a reliable solution for your vehicle.',
        image: '/wheel1.avif',
        price: 245.99,
      },
      {
        id: 'wheels-2',
        name: 'LKQ Wheel STLTP022U45',
        description: 'Provides excellent traction and stability for a safe driving experience.',
        image: '/wheel2.avif',
        price: 139.99,
      },
      {
        id: 'wheels-3',
        name: 'Supreme Collision Parts Group Wheel ALYHW034U30',
        description: 'High-quality wheel that enhances both performance and aesthetics of your vehicle.',
        image: '/wheel3.avif',
        price: 314.99,
      }
    ]
  },
  {
    id: 'lighting',
    name: 'Lighting Products',
    description: 'Provides visibility and safety during nighttime driving and adverse weather conditions.',
    image: '/lighting.avif',
    items: [
      {
        id: 'lighting-1',
        name: 'Duralast Halogen Headlight Bulb 9003',
        description: 'Bright halogen bulb that enhances nighttime visibility for safer driving.',
        image: '/imgv4.avif',
        price: 18.00,
      }
    ]
  },
];

export default carPartsData;
