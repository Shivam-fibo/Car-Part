const carPartsData = [
  {
    id: 'radiators',
    name: 'Radiators',
    description: 'Helps keep the engine cool by transferring heat.',
    image: '/radiator.jpg',
    items: [
      {
        id: 'radiators-1',
        name: 'Standard Radiator',
        description: 'A basic radiator suitable for most cars.',
        image: '/radiator.jpg',
        price: 150.00, 
      },
      {
        id: 'radiators-2',
        name: 'Performance Radiator',
        description: 'Designed for enhanced cooling efficiency.',
        image: '/radiator.jpg',
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
        id: 'suspension-1',
        name: 'Shock Absorbers',
        description: 'Helps dampen the impact of road bumps.',
        image: '/suspension.avif',
        price: 100.00, 
      },
      {
        id: 'suspension-2',
        name: 'Struts',
        description: 'Supports the vehicle’s weight and provides stability.',
        image: '/suspension.avif',
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
        name: 'Standard Catalytic Converter',
        description: 'Compliant with emission standards for most vehicles.',
        image: '/catalytic-converter.webp',
        price: 300.00, 
      }
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
        name: 'Brake Pad Set',
        description: 'Provides friction for stopping the vehicle.',
        image: '/brakes.jpg',
        price: 80.00, 
      },
      {
        id: 'brakes-2',
        name: 'Brake Discs',
        description: 'Works with brake pads to stop the car.',
        image: '/brakes.jpg',
        price: 90.00, 
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
        name: 'Fuel Pump',
        description: 'Pumps fuel from the tank to the engine.',
        image: '/fuel-pump.avif',
        price: 75.00, 
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
        name: 'Oxygen Sensor',
        description: 'Measures the oxygen level in exhaust gases.',
        image: '/oxygen-sensor.avif',
        price: 45.00, 
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
        name: 'Engine Air Filter',
        description: 'Protects the engine from debris.',
        image: '/air-filter.avif',
        price: 20.00, 
      }
    ]
  },
  {
    id: 'ignition',
    name: 'Ignition System',
    description: 'Starts the engine by igniting the fuel-air mixture.',
    image: '/ignition.avif',
    items: [
      {
        id: 'ignition-1',
        name: 'Ignition Coils',
        description: 'Converts the battery voltage to high voltage.',
        image: '/ignition.avif',
        price: 50.00, 
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
        id: 'interior-1',
        name: 'Seats',
        description: 'Provides seating for passengers.',
        image: '/seats.avif',
        price: 200.00, 
      },
      {
        id: 'interior-2',
        name: 'Carpets',
        description: 'Covers the floor of the car for comfort.',
        image: '/carpets.avif',
        price: 100.00, 
      },
      {
        id: 'interior-3',
        name: 'Door Panels',
        description: 'Covers the interior of the car doors.',
        image: '/door-panels.avif',
        price: 80.00, 
      }
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
        name: 'Clutch Kits',
        description: 'Facilitates engagement and disengagement of the engine.',
        image: '/clutch.avif',
        price: 250.00, 
      },
      {
        id: 'transmission-2',
        name: 'Torque Converters',
        description: 'Transfers engine power to the transmission.',
        image: '/torque-converter.avif',
        price: 300.00, 
      },
      {
        id: 'transmission-3',
        name: 'Shifters',
        description: 'Allows the driver to change gears.',
        image: '/shifter.avif',
        price: 70.00, 
      }
    ]
  },
  {
    id: 'exterior',
    name: 'Exterior Parts',
    description: 'Components that form the outer structure of the car.',
    image: '/exterior.avif',
    items: [
      {
        id: 'exterior-1',
        name: 'Hoods',
        description: 'Covers the engine compartment.',
        image: '/hood.avif',
        price: 400.00, 
      },
      {
        id: 'exterior-2',
        name: 'Bumpers',
        description: 'Protects the car in minor collisions.',
        image: '/bumper.avif',
        price: 150.00, 
      },
      {
        id: 'exterior-3',
        name: 'Fenders',
        description: 'Prevents road debris from being thrown by tires.',
        image: '/fender.avif',
        price: 120.00, 
      }
    ]
  },
  {
    id: 'wheels',
    name: 'Wheels and Tires',
    description: 'Supports vehicle movement and grip.',
    image: '/wheels.avif',
    items: [
      {
        id: 'wheels-1',
        name: 'Alloy Wheels',
        description: 'Lighter wheels that improve performance.',
        image: '/alloy-wheels.avif',
        price: 300.00, 
      },
      {
        id: 'wheels-2',
        name: 'Performance Tires',
        description: 'Designed for enhanced traction and speed.',
        image: '/performance-tires.avif',
        price: 150.00, 
      }
    ]
  },
  {
    id: 'filters',
    name: 'Filters',
    description: 'Keeps contaminants out of various car systems.',
    image: '/filters.avif',
    items: [
      {
        id: 'filters-1',
        name: 'Cabin Air Filter',
        description: 'Filters air entering the cabin.',
        image: '/cabin-filter.avif',
        price: 25.00, 
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
        id: 'lighting-1',
        name: 'Headlights',
        description: 'Illuminates the road ahead at night.',
        image: '/headlights.avif',
        price: 80.00, 
      },
      {
        id: 'lighting-2',
        name: 'Taillights',
        description: 'Signals to drivers behind you.',
        image: '/taillights.avif',
        price: 50.00, 
      }
    ]
  },
  {
    id: 'mirrors',
    name: 'Mirrors',
    description: 'Helps drivers see surrounding traffic.',
    image: '/mirrors.avif',
    items: [
      {
        id: 'mirrors-1',
        name: 'Side Mirrors',
        description: 'Provides visibility to the side of the vehicle.',
        image: '/side-mirrors.avif',
        price: 60.00, 
      },
      {
        id: 'mirrors-2',
        name: 'Rearview Mirror',
        description: 'Allows the driver to see behind the car.',
        image: '/rearview-mirror.avif',
        price: 40.00, 
      }
    ]
  }
];

export default carPartsData;
