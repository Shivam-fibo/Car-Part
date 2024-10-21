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
        description: 'A basic radiator suitable for most cars.',
        image: '/img1.avif',
        price: 150.00, 
      },
      {
        id: 'Duralast Radiator B1516',
        name: 'Performance Radiator',
        description: 'Designed for enhanced cooling efficiency.',
        image: '/img2.avif',
        price: 250.00, 
      }
    ]
  },
  {
    id: 'suspension',
    name: 'Shocks and Struts',
    description: 'Parts of the suspension system that absorb shock.',
    image: '/suspension.avif',
    items: [
      {
        id: 'Duralast Loaded Strut Assembly LS53-90921R',
        name: 'Shock Absorbers',
        description: 'Helps dampen the impact of road bumps.',
        image: '/img3.webp',
        price: 209.00, 
      },
      {
        id: 'Duralast Loaded Strut LS54-95161L',
        name: 'Struts',
        description: 'Supports the vehicle’s weight and provides stability.',
        image: '/img4.webp',
        price: 120.00, 
      }
    ]
  },
  {
    id: 'catalytic-converters',
    name: 'Catalytic Converters',
    description: 'Reduces emissions by converting exhaust gases.',
    image: '/catalytic-converter.webp',
    items: [
      {
        id: 'catalytic-1',
        name: ' Catalytic Converter 2.5in 51206',
        description: 'Compliant with emission standards for most vehicles.',
        image: '/1mg5.avif',
        price: 195.00, 
      },
      {
        id: 'catalytic-1',
        name: 'Catalytic Converter 2.5in 51356',
        description: 'Compliant with emission standards for most vehicles.',
        image: '/1mg5.avif',
        price: 200.00, 
      },
    ]
  },
  {
    id: 'brakes',
    name: 'Brakes',
    description: 'Essential for vehicle stopping power.',
    image: '/brakes.jpg',
    items: [
      {
        id: 'brakes-1',
        name: 'Duralast Gold Disc Brake',
        description: 'Provides friction for stopping the vehicle.',
        image: '/imgv1.avif',
        price: 60.00, 
      },
      {
        id: 'brakes-2',
        name: 'Duralast Disc Brake Pad Set MKD914',
        description: 'Works with brake pads to stop the car.',
        image: '/imgv2.avif',
        price: 41.00, 
      }
    ]
  },
  {
    id: 'fuel-system',
    name: 'Fuel System',
    description: 'Ensures proper fuel delivery to the engine.',
    image: '/fuel-system.avif',
    items: [
      {
        id: 'fuel-system-1',
        name: 'Techron Fuel System 12oz',
        description: 'Pumps fuel from the tank to the engine.',
        image: '/imgv3.avif',
        price: 15.00, 
      },
      {
        id: 'fuel-system-1',
        name: 'CataClean Fuel Cleaner 16.7oz',
        description: 'Pumps fuel from the tank to the engine.',
        image: '/a1.avif',
        price: 15.00, 
      }
    ]
  },
  {
    id: 'sensors',
    name: 'Sensors',
    description: 'Monitors various aspects of vehicle performance.',
    image: '/sensors.avif',
    items: [
      {
        id: 'sensors-1',
        name: 'Duralast Coolant Temperature Sensor SU201',
        description: 'Measures the oxygen level in exhaust gases.',
        image: '/a2.avif',
        price: 25.00, 
      }
    ]
  },
  {
    id: 'air-filters',
    name: 'Air Filters',
    description: 'Keeps contaminants out of the engine.',
    image: '/air-filter.avif',
    items: [
      {
        id: 'air-filters-1',
        name: 'STP Panel Engine Air Filter SA8755',
        description: 'Protects the engine from debris.',
        image: '/a4.avif',
        price: 20.00, 
      }
    ]
  },
  {
    id: ' ',
    name: 'Ignition System',
    description: 'Starts the engine by igniting the fuel-air mixture.',
    image: '/ignition.avif',
    items: [
      {
        id: 'ignition-1',
        name: 'Duralast Direct Ignition Coil C1417',
        description: 'Converts the battery voltage to high voltage.',
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
        description: 'Provides seating for passengers.',
        image: '/seat.avif',
        price: 250.00, 
      },
      {
        id: 'interior-2',
        name: 'Black Carpet Floor Mat',
        description: 'Covers the floor of the car for comfort.',
        image: '/carpet1.avif',
        price: 20.00, 
      },
    ]
  },
  {
    id: 'transmission',
    name: 'Transmission Parts',
    description: 'Enables smooth gear shifting and power delivery.',
    image: '/transmission.avif',
    items: [
      {
        id: 'transmission-1',
        name: 'High Gear Manual Transmission Assembly',
        description: 'Facilitates engagement and disengagement of the engine.',
        image: '/ig1.avif',
        price: 1150.00, 
      },
      {
        id: 'transmission-2',
        name: 'High Gear Manual Transmission Assemblys',
        description: 'Transfers engine power to the transmission.',
        image: '/ig2.avif',
        price: 3500.00, 
      },
      {
        id: 'transmission-3',
        name: 'High Gear Manual Transmission ',
        description: 'Allows the driver to change gears.',
        image: '/ig3.avif',
        price: 1300.00, 
      }
    ]
  },
  {
    id: 'exterior',
    name: 'Exterior Parts',
    description: 'Components that form the outer structure of the car.',
    image: '/ext.webp',
    items: [
      {
        id: 'exterior-1',
        name: 'American Modified Hood',
        description: 'Covers the engine compartment.',
        image: '/hood1.avif',
        price: 500.00, 
      },
      {
        id: 'exterior-1',
        name: 'Crown Automotive Jeep  Hood',
        description: 'Covers the engine compartment.',
        image: '/hood2.avif',
        price: 500.00, 
      },
    ]
  },
  {
    id: 'wheels',
    name: 'Wheels and Tires',
    description: 'Supports vehicle movement and grip.',
    image: '/wheels.avif',
    "items": [
      {
        "id": "wheels-1",
        "name": "LKQ Wheel STLFD065U15N",
        "description": "",
        "image": "/wheel1.avif",
        "price": 245.99
      },
      {
        "id": "wheels-2",
        "name": "LKQ Wheel STLTP022U45",
        "description": "",
        "image": "/wheel2.avif",
        "price": 139.99
      },
      {
        "id": "wheels-3",
        "name": "Supreme Collision Parts Group Wheel ALYHW034U30",
        "description": "",
        "image": "/wheel3.avif",
        "price": 314.99
      }
    ]
  },

  {
    id: 'lighting',
    name: 'Lighting Products',
    description: 'Provides visibility and safety.',
    image: '/lighting.avif',
    
      items: [
        {
          "id": "lighting-1",
          "name": "Blazer International C6423 Trailer Light Kit",
          "description": "",
          "image": "/ligth1.avif",
          "price": 27.99
        },
        {
          "id": "lighting-2",
          "name": "Hopkins Towing Solution Multi-Purpose Trailer Light",
          "description": "",
          "image": "/ligth2.avif",
          "price": 8.99
        },
        {
          "id": "lighting-3",
          "name": "Hopkins Towing Solution Stop, Tail, and Turn Trailer Light",
          "description": "",
          "image": "/light3.avif",
          "price": 8.99
        }
      ]   
  },
  {
    id: 'mirrors',
    name: 'Mirrors',
    description: 'Helps drivers see surrounding traffic.',
    image: '/mirrors.avif',
    
      "items": [
        {
          "id": "mirrors-1",
          "name": "K-Source 7in x 10in Lens Cut to Fit Replacement Glass",
          "description": "",
          "image": "/mirror1.avif",
          "price": 12.99
        },
        {
          "id": "mirrors-2",
          "name": "K-Source 7 1/2in x 10 1/2in Chrome, 3 Point Mount",
          "description": "",
          "image": "/mirror2.avif",
          "price": 22.49
        },
        {
          "id": "mirrors-3",
          "name": "Pilot Universal Port Mirror",
          "description": "",
          "image": "/mirror3.avif",
          "price": 8.00
        }
      ]   
  }
];

export default carPartsData;
