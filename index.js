

let sellingP = document.getElementById('selling-price');
let costPriceId = document.getElementById('cost-price');
let gstId = document.getElementById('gst');
let weightId = document.getElementById('weight');
let heightId = document.getElementById('height');
let widthId = document.getElementById('width');
let lengthId = document.getElementById('length');
let calculateBtn = document.getElementById('calculate-btn');

let shippingCharge = document.querySelectorAll(".shiping-charge");
let ACSChargeId = document.querySelectorAll(".ACS-charge");
let GstACSChargeId = document.querySelectorAll(".per-charge");
let totalChargeId = document.querySelectorAll(".total-charge");

let profitId = document.querySelectorAll(".profit");
let bankSettlementId = document.querySelectorAll(".bank-settlement");
let referalFee = document.getElementById('referal-fee');
let closingFeeId = document.getElementById('closing-fee');
let returnRateId = document.getElementById('return-rate');
let discountDeals = document.getElementById('discount-deals');

// excluded shipping
let excludedshippingLocalId = document.getElementById('excluded-local-shipping');
let excludedshippingRegionalId = document.getElementById('excluded-regional-shipping');
let excludedshippingNationalId = document.getElementById('excluded-national-shipping');


var referralFeesByCategory = {
    "Automotive, Car & Accessories": [
        {
            "Automotive - Helmets & Riding Gloves": {
                "referralPercentage": {
                    "500": 6.5,
                    "1000": 8.5
                }
            }
        },
        {
            "Automotive - Tyres & Rims": {
                "referralPercentage": {
                    "500": 5.0,
                    "1000": 7.0
                }
            }
        },
        {
            "Automotive Vehicles - 2-Wheelers, 4-Wheelers and Electric Vehicles": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Automotive – Car and Bike parts, Brakes, Styling and body fittings, Transmission, Engine parts, Exhaust systems, Interior fitting, Suspension and Wipers": {
                "referralPercentage": {
                    "500": 13.0,
                    "1000": 14.0
                }
            }
        },
        {
            "Automotive – Cleaning kits (Sponges, Brush, Duster, Cloths and liquids), Car interior & exterior care (Waxes, polish, Shampoo and other), Car and Bike Lighting and Paints": {
                "referralPercentage": {
                    "500": 9.0,
                    "1000": 12.0
                }
            }
        },
        {
            "Automotive Accessories (Floor Mats, Seat/Car/Bike Covers) and Riding Gear (Face Covers and Gloves)": {
                "referralPercentage": {
                    "1000": 14.0,
                    "2000": 15.5
                }
            }
        },
        {
            "Vehicle Tools and Appliances": {
                "referralPercentage": {
                    "300": 6.5,
                    "500": 7.5,
                    "1000": 8.5
                }
            }
        },
        {
            "Oils, Lubricants": {
                "referralPercentage": {
                    "maxPercentage": 8.5
                }
            }
        },
        {
            "Automotive – Batteries and air fresheners": {
                "referralPercentage": {
                    "500": 6.5,
                    "1000": 7.5,
                    "2000": 8.5
                }
            }
        },
        {
            "Car Electronics Devices": {
                "referralPercentage": {
                    "500": 7.5,
                    "1000": 9.5,
                    "2000": 10.0
                }
            }
        },
        {
            "Car Electronics Accessories": {
                "referralPercentage": {
                    "500": 10.5,
                    "1000": 11.0,
                    "2000": 13.0
                }
            }
        }
    ],
    "Baby Products, Toys & Education": [
        {
            "Baby Hardlines - Swings, Bouncers and Rockers, Carriers, Walkers": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 8.5,
                    "1000": 6.0,
                    "2000": 7.5
                }
            }
        },
        {
            "Baby Safety - Guards & Locks": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 8.5,
                    "1000": 6.0,
                    "2000": 7.5
                }
            }
        },
        {
            "Baby Room Décor": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 8.5,
                    "1000": 6.0,
                    "2000": 7.5
                }
            }
        },
        {
            "Baby Furniture": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 8.5,
                    "1000": 6.0,
                    "2000": 7.5
                }
            }
        },
        {
            "Baby Car Seats & Accessories": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 8.5,
                    "1000": 6.0,
                    "2000": 7.5
                }
            }
        },
        {
            "Baby Strollers": {
                "referralPercentage": {
                    "300": 4.0,
                    "1000": 6.0,
                    "2000": 10.0
                }
            }
        },
        {
            "Baby diapers": {
                "referralPercentage": {
                    "300": 5.0,
                    "500": 5.5,
                    "1000": 9.5
                }
            }
        },
        {
            "Toys - Drones": {
                "referralPercentage": {
                    "300": 7.5,
                    "500": 16.0,
                    "1000": 11.5,
                    "2000": 12.0
                }
            }
        },
        {
            "Toys - Balloons and Soft Toys": {
                "referralPercentage": {
                    "maxPercentage": 11.0
                }
            }
        }
    ],
    "Books, Music, Movies, Video Games, Entertainment": [
        {
            "Books": {
                "referralPercentage": {
                    "250": 3.0,
                    "500": 4.5,
                    "1000": 9.0,
                    "2000": 13.5
                }
            }
        },
        {
            "Movies": {
                "referralPercentage": {
                    "maxPercentage": 6.5
                }
            }
        },
        {
            "Music": {
                "referralPercentage": {
                    "maxPercentage": 6.5
                }
            }
        },
        {
            "Musical Instruments - Guitars": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Musical Instruments - Keyboards": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Musical Instruments - Microphones": {
                "referralPercentage": {
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Musical Instruments - Others": {
                "referralPercentage": {
                    "maxPercentage": 10.5
                }
            }
        },
        {
            "Musical Instruments - DJ & VJ Equipment, Recording and Computer, Cables & Leads, PA & Stage": {
                "referralPercentage": {
                    "maxPercentage": 10.5
                }
            }
        },
        {
            "Video Games - Online game services": {
                "referralPercentage": {
                    "maxPercentage": 2.0
                }
            }
        },
        {
            "Video Games - Accessories": {
                "referralPercentage": {
                    "500": 10.5,
                    "1000": 13.5
                }
            }
        },
        {
            "Video Games - Consoles": {
                "referralPercentage": {
                    "1000": 7.0,
                    "2000": 9.0
                }
            }
        },
        {
            "Video Games": {
                "referralPercentage": {
                    "maxPercentage": 9.0
                }
            }
        }
    ],
    "Industrial, Medical, Scientific Supplies & Office Products": [
        {
            "Business and Industrial Supplies - Scientific Supplies": {
                "referralPercentage": {
                    "300": 11.0,
                    "15000": 11.5,
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "OTC Medicine": {
                "referralPercentage": {
                    "500": 12.0,
                    "1000": 15.0
                }
            }
        },
        {
            "Masks": {
                "referralPercentage": {
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Weighing Scales & Fat Analyzers": {
                "referralPercentage": {
                    "500": 15.0,
                    "1000": 10.0
                }
            }
        },
        {
            "3D Printers": {
                "referralPercentage": {
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Business and Industrial Supplies - Material Handling Equipment, Janitorial & Sanitation, Medical & Dental Supplies, Commercial kitchen and refrigeration Equipment": {
                "referralPercentage": {
                    "maxPercentage": 5.5
                }
            }
        },
        {
            "Business and Industrial Supplies - Electrical Testing, Dimensional Measurement, Thermal Printers, Barcode Scanners": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Business and Industrial Supplies - Power tools & accessories, Welding machines, Microscopes, Industrial Electrical products": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Occupational Safety Supplies (Mask, gloves, Safety shoes, Face shields & other PPE products)": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Stethoscopes": {
                "referralPercentage": {
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Packing materials": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Power & hand Tools and Water Dispenser": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Office products - Office supplies": {
                "referralPercentage": {
                    "500": 10.0,
                    "1000": 11.0,
                    "2000": 12.5
                }
            }
        },
        {
            "Office products - Electronic Devices": {
                "referralPercentage": {
                    "1000": 9.5,
                    "2000": 10.5
                }
            }
        },
        {
            "Office products - Arts and Crafts": {
                "referralPercentage": {
                    "500": 10.0,
                    "1000": 11.0,
                    "2000": 12.5
                }
            }
        },
        {
            "Office products - Writing Instruments": {
                "referralPercentage": {
                    "300": 10.0,
                    "1000": 11.0,
                    "2000": 12.5
                }
            }
        }
    ],
    "Clothing, Fashion, Fashion Accessories, Jewellery, Luggage, Shoes": [
        {
            "Apparel - Accessories": {
                "referralPercentage": {
                    "500": 13.0,
                    "1000": 19.0
                }
            }
        },
        {
            "Apparel - Sweat Shirts and Jackets": {
                "referralPercentage": {
                    "500": 8.0,
                    "1000": 20.0,
                    "2000": 24.0
                }
            }
        },
        {
            "Apparel - Shorts": {
                "referralPercentage": {
                    "300": 16.5,
                    "500": 13.5,
                    "1000": 23.5,
                    "2000": 24.0
                }
            }
        },
        {
            "Apparel - Baby": {
                "referralPercentage": {
                    "500": 11.0,
                    "1000": 17.5,
                    "2000": 20.0
                }
            }
        },
        {
            "Apparel - Ethnic wear": {
                "referralPercentage": {
                    "300": 12.5,
                    "1000": 7.5,
                    "2000": 17.5
                }
            }
        },
        {
            "Apparel - Other innerwear": {
                "referralPercentage": {
                    "500": 12.0,
                    "1000": 16.5,
                    "2000": 18.5
                }
            }
        },
        {
            "Apparel - Sleepwear": {
                "referralPercentage": {
                    "300": 13.5,
                    "500": 11.0,
                    "1000": 16.5,
                    "2000": 19.0
                }
            }
        },
        {
            "Apparel - Sarees and Dress Materials": {
                "referralPercentage": {
                    "500": 14.0,
                    "1000": 16.5,
                    "2000": 23.0
                }
            }
        },
        {
            "Apparel - Men's T-shirts (except Polos, Tank tops and full sleeve tops)": {
                "referralPercentage": {
                    "500": 13.5,
                    "1000": 21.0
                }
            }
        },
        {
            "Apparel - Womens' Innerwear / Lingerie": {
                "referralPercentage": {
                    "300": 13.0,
                    "500": 14.0,
                    "1000": 19.5,
                    "2000": 15.0
                }
            }
        },
        {
            "Backpacks": {
                "referralPercentage": {
                    "500": 12.0,
                    "1000": 13.0
                }
            }
        },
        {
            "Eyewear - Sunglasses, Frames and zero power eye glasses": {
                "referralPercentage": {
                    "500": 14.0,
                    "1000": 15.0,
                    "2000": 18.5
                }
            }
        },
        {
            "Fashion Jewellery": {
                "referralPercentage": {
                    "1000": 22.5,
                    "2000": 24.0
                }
            }
        },
        {
            "Fine Jewellery - Gold Coins": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Fine Jewellery - studded": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Fine Jewellery - unstudded and solitaire": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Silver Jewellery": {
                "referralPercentage": {
                    "1000": 10.5,
                    "2000": 13.0
                }
            }
        },
        {
            "Flip Flops, Fashion Sandals and Slippers": {
                "referralPercentage": {
                    "1000": 13.0,
                    "2000": 15.0
                }
            }
        },
        {
            "Handbags": {
                "referralPercentage": {
                    "500": 10.0,
                    "1000": 11.0,
                    "2000": 12.0
                }
            }
        },
        {
            "Luggage - Suitcase & Trolleys": {
                "referralPercentage": {
                    "500": 7.5,
                    "1000": 6.5,
                    "2000": 5.5
                }
            }
        },
        {
            "Luggage - Travel Accessories": {
                "referralPercentage": {
                    "300": 12.0,
                    "500": 9.0,
                    "1000": 10.0
                }
            }
        },
        {
            "Kids shoes": {
                "referralPercentage": {
                    "300": 10.0,
                    "1000": 14.0,
                    "2000": 16.0
                }
            }
        },
        {
            "Shoes": {
                "referralPercentage": {
                    "500": 15.0,
                    "1000": 16.0,
                    "2000": 16.5
                }
            }
        },
        {
            "Shoes - Sandals & Floaters": {
                "referralPercentage": {
                    "maxPercentage": 10.5
                }
            }
        },
        {
            "Wallets": {
                "referralPercentage": {
                    "500": 10.0,
                    "1000": 12.5,
                    "2000": 12.0
                }
            }
        },
        {
            "Watches": {
                "referralPercentage": {
                    "maxPercentage": 14.0
                }
            }
        }
    ],
    "Electronics (Camera, Mobile, PC, Wireless) & Accessories": [
        {
            "Cables and Adapters": {
                "referralPercentage": {
                    "300": 22.0,
                    "500": 17.0,
                    "1000": 20.0
                }
            }
        },
        {
            "Camera Accessories": {
                "referralPercentage": {
                    "500": 11.0,
                    "1000": 13.0,
                    "2000": 13.5
                }
            }
        },
        {
            "Camera Lenses": {
                "referralPercentage": {
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Camera and Camcorder": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Cases, Covers, Skins, Screen Guards": {
                "referralPercentage": {
                    "150": 3.0,
                    "300": 19.0,
                    "500": 23.0,
                    "1000": 25.0
                }
            }
        },
        {
            "Desktops": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Electronic Accessories (Electronics, PC & Wireless)": {
                "referralPercentage": {
                    "maxPercentage": 17.0
                }
            }
        },
        {
            "Electronic Devices (except TV, Camera & Camcorder, Camera Lenses and Accessories, GPS Devices, Speakers)": {
                "referralPercentage": {
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Entertainment Collectibles": {
                "referralPercentage": {
                    "300": 13.0,
                    "maxPercentage": 17.0
                }
            }
        },
        {
            "Fashion Smartwatches": {
                "referralPercentage": {
                    "maxPercentage": 15.5
                }
            }
        },
        {
            "GPS Devices": {
                "referralPercentage": {
                    "maxPercentage": 13.5
                }
            }
        },
        {
            "Hard Disks": {
                "referralPercentage": {
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Headsets, Headphones and Earphones": {
                "referralPercentage": {
                    "maxPercentage": 18.0
                }
            }
        },
        {
            "Keyboards and Mouse": {
                "referralPercentage": {
                    "2800": 14.0,
                    "maxPercentage": 17.0
                }
            }
        },
        {
            "Kindle Accessories": {
                "referralPercentage": {
                    "maxPercentage": 25.0
                }
            }
        },
        {
            "Laptop Bags & Sleeves": {
                "referralPercentage": {
                    "500": 12.0,
                    "1000": 13.0
                }
            }
        },
        {
            "Laptop and Camera Battery": {
                "referralPercentage": {
                    "maxPercentage": 14.0
                }
            }
        },
        {
            "Laptops": {
                "referralPercentage": {
                    "70000": 6.0,
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Memory Cards": {
                "referralPercentage": {
                    "maxPercentage": 16.0
                }
            }
        },
        {
            "Mobile phones": {
                "referralPercentage": {
                    "maxPercentage": 5.5
                }
            }
        },
        {
            "Tablets (including Graphic Tablets)": {
                "referralPercentage": {
                    "12000": 6.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Modems & Networking Devices": {
                "referralPercentage": {
                    "maxPercentage": 14.0
                }
            }
        },
        {
            "Monitors": {
                "referralPercentage": {
                    "maxPercentage": 6.5
                }
            }
        },
        {
            "PC Components (RAM, Motherboards)": {
                "referralPercentage": {
                    "maxPercentage": 5.5
                }
            }
        },
        {
            "Power Banks & Chargers": {
                "referralPercentage": {
                    "1000": 20.0,
                    "maxPercentage": 20.5
                }
            }
        },
        {
            "Printers & Scanners": {
                "referralPercentage": {
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Software Products": {
                "referralPercentage": {
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Speakers": {
                "referralPercentage": {
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Television": {
                "referralPercentage": {
                    "maxPercentage": 6.0
                }
            }
        },
        {
            "Landline Phones": {
                "referralPercentage": {
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Smart Watches & Accessories": {
                "referralPercentage": {
                    "maxPercentage": 15.5
                }
            }
        },
        {
            "USB Flash Drives (Pen Drives)": {
                "referralPercentage": {
                    "maxPercentage": 16.0
                }
            }
        },
        {
            "Projectors, Home Theatre Systems, Binoculars and Telescopes": {
                "referralPercentage": {
                    "maxPercentage": 6.0
                }
            }
        }
    ],
    "Grocery, Food & Pet Supplies": [
        {
            "Grocery - herbs and spices": {
                "referralPercentage": {
                    "300": 4.0,
                    "1000": 5.5,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Grocery & Gourmet - Oils": {
                "referralPercentage": {
                    "1000": 7.5,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Grocery - Dried fruits and nuts": {
                "referralPercentage": {
                    "1000": 6.0,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Grocery - Hampers and gifting": {
                "referralPercentage": {
                    "1000": 9.0,
                    "maxPercentage": 11.5
                }
            }
        },
        {
            "Pet food": {
                "referralPercentage": {
                    "300": 5.5,
                    "1000": 11.5,
                    "maxPercentage": 12.5
                }
            }
        },
        {
            "Pet Products": {
                "referralPercentage": {
                    "300": 2.0,
                    "500": 10.5,
                    "1000": 12.0
                }
            }
        }
    ],
    "Health, Beauty, Personal Care & Personal Care Appliances": [
        {
            "Beauty - Fragrance": {
                "referralPercentage": {
                    "300": 13.5,
                    "500": 12.5,
                    "maxPercentage": 14.0
                }
            }
        },
        {
            "Beauty - Haircare, Bath and Shower": {
                "referralPercentage": {
                    "300": 7.5,
                    "500": 5.0,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Beauty - Makeup": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 4.5,
                    "1000": 7.5,
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Face Wash": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 5.0,
                    "1000": 9.0,
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Moisturizer cream": {
                "referralPercentage": {
                    "500": 6.5,
                    "1000": 9.0,
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Sunscreen": {
                "referralPercentage": {
                    "300": 6.5,
                    "500": 6.0,
                    "1000": 9.0,
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Deodrants": {
                "referralPercentage": {
                    "300": 8.5,
                    "1000": 6.5,
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Facial steamers": {
                "referralPercentage": {
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Prescription Medicine": {
                "referralPercentage": {
                    "maxPercentage": 6.0
                }
            }
        },
        {
            "Health & Personal Care (HPC) - Medical Equipment & Contact Lens": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Health and Personal Care - Ayurvedic products, Oral care, hand sanitizers, Pooja supplies": {
                "referralPercentage": {
                    "500": 5.0,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Health & Household - Sports Nutrition and meal replacement shakes": {
                "referralPercentage": {
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Health and Personal Care - Contact lens and reading glasses": {
                "referralPercentage": {
                    "maxPercentage": 12.0
                }
            }
        },
        {
            "Health and Household - Household Cleaning, Laundry, Air Fresheners, Personal Hygiene (Handwash, Feminine Hygiene, Oral Care)": {
                "referralPercentage": {
                    "500": 4.5,
                    "1000": 7.5,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Health and Household - Vitamins & Mineral Health Supplements": {
                "referralPercentage": {
                    "500": 9.0,
                    "maxPercentage": 10.5
                }
            }
        },
        {
            "Luxury Beauty": {
                "referralPercentage": {
                    "300": 5.0,
                    "500": 6.0,
                    "1000": 9.0,
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Car Cradles, Lens Kits and Tablet Cases": {
                "referralPercentage": {
                    "500": 19.0,
                    "1000": 25.0,
                    "maxPercentage": 27.0
                }
            }
        },
        {
            "Personal Care Appliances - Electric Massagers": {
                "referralPercentage": {
                    "500": 9.5,
                    "maxPercentage": 14.5
                }
            }
        },
        {
            "Personal Care Appliances (Grooming & Styling)": {
                "referralPercentage": {
                    "1000": 11.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Personal Care Appliances - Glucometer and Glucometer Strips": {
                "referralPercentage": {
                    "maxPercentage": 5.5
                }
            }
        },
        {
            "Personal Care Appliances - Thermometers": {
                "referralPercentage": {
                    "500": 12.5,
                    "maxPercentage": 10.5
                }
            }
        },
        {
            "Personal Care Appliances - Weighing Scales and Fat Analyzers": {
                "referralPercentage": {
                    "500": 11.0,
                    "1000": 13.5,
                    "maxPercentage": 13.0
                }
            }
        }
    ],
    "Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden": [
        {
            "Bean Bags & Inflatables": {
                "referralPercentage": {
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Mattresses": {
                "referralPercentage": {
                    "1000": 25.5,
                    "20000": 16.0,
                    "maxPercentage": 13.5
                }
            }
        },
        {
            "Rugs and Doormats": {
                "referralPercentage": {
                    "1000": 10.5,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Clocks": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Wall Art": {
                "referralPercentage": {
                    "300": 5.0,
                    "maxPercentage": 13.5
                }
            }
        },
        {
            "Home - Fragrance & Candles": {
                "referralPercentage": {
                    "500": 7.5,
                    "maxPercentage": 12.5
                }
            }
        },
        {
            "Bedsheets, Blankets and covers": {
                "referralPercentage": {
                    "500": 6.0,
                    "1000": 9.0,
                    "maxPercentage": 8.5
                }
            }
        },
        {
            "Home furnishing (Excluding curtain and curtain accessories)": {
                "referralPercentage": {
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Containers, Boxes, Bottles, and Kitchen Storage": {
                "referralPercentage": {
                    "300": 5.0,
                    "500": 7.5,
                    "maxPercentage": 12.0
                }
            }
        },
        {
            "Home improvement - Accessories": {
                "referralPercentage": {
                    "maxPercentage": 13.5
                }
            }
        },
        {
            "Home improvement (excl. accessories), including Home Security Systems": {
                "referralPercentage": {
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Tiles & Flooring Accessories": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Wires (Electrical Wires/cables for house wiring, adhoc usage)": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Ladders, Kitchen and Bath fixtures": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Home Storage (Excluding Kitchen Containers, Boxes, Bottles, and Kitchen Storage)": {
                "referralPercentage": {
                    "300": 10.0,
                    "1000": 14.0,
                    "maxPercentage": 15.0
                }
            }
        },
        {
            "Wallpapers & Wallpaper Accessories": {
                "referralPercentage": {
                    "1000": 13.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Home Decor Products": {
                "referralPercentage": {
                    "300": 7.0,
                    "maxPercentage": 17.0
                }
            }
        },
        {
            "Wall Paints and Tools": {
                "referralPercentage": {
                    "300": 9.0,
                    "maxPercentage": 6.0
                }
            }
        },
        {
            "Home - Waste & Recycling": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Craft materials": {
                "referralPercentage": {
                    "500": 2.0,
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Water Purifier and Accessories": {
                "referralPercentage": {
                    "5000": 6.5,
                    "maxPercentage": 7.5
                }
            }
        },
        {
            "Water Heaters and Accessories": {
                "referralPercentage": {
                    "5000": 8.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Home improvement - Kitchen & Bath (Fittings, accessories), Cleaning Supplies, Electricals, Hardware, Building Materials": {
                "referralPercentage": {
                    "300": 5.0,
                    "maxPercentage": 12.0
                }
            }
        },
        {
            "Sanitaryware - Toilets, Bathtubs, Basins/Sinks, Bath Mirrors & Vanities, and Shower Enclosures/partitions": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Home Safety & Security Systems": {
                "referralPercentage": {
                    "maxPercentage": 6.0
                }
            }
        },
        {
            "Inverter and Batteries": {
                "referralPercentage": {
                    "maxPercentage": 4.5
                }
            }
        },
        {
            "Cleaning and Home Appliances": {
                "referralPercentage": {
                    "5000": 7.5,
                    "maxPercentage": 8.5
                }
            }
        },
        {
            "Ladders": {
                "referralPercentage": {
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Indoor Lighting – Wall, ceiling fixture lights, lamp bases, lamp shades and Smart Lighting": {
                "referralPercentage": {
                    "2000": 14.5,
                    "maxPercentage": 11.5
                }
            }
        },
        {
            "Doors and Windows (wooden, metal, PVC/UPVC Doors & Windows)": {
                "referralPercentage": {
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "LED Bulbs and Battens": {
                "referralPercentage": {
                    "300": 9.0,
                    "maxPercentage": 14.0
                }
            }
        },
        {
            "Cushion Covers": {
                "referralPercentage": {
                    "500": 8.0,
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Curtains and Curtain Accessories": {
                "referralPercentage": {
                    "300": 15.5,
                    "maxPercentage": 16.5
                }
            }
        },
        {
            "Slipcovers and Kitchen Linens": {
                "referralPercentage": {
                    "maxPercentage": 15.5
                }
            }
        },
        {
            "Safes and Lockers with Locking Mechanism": {
                "referralPercentage": {
                    "maxPercentage": 12.0
                }
            }
        },
        {
            "Lawn & Garden - Solar Panels": {
                "referralPercentage": {
                    "maxPercentage": 6.0
                }
            }
        },
        {
            "Lawn & Garden - Leaf blower and Water pump": {
                "referralPercentage": {
                    "maxPercentage": 6.5
                }
            }
        },
        {
            "Lawn & Garden - Commercial Agricultural Products": {
                "referralPercentage": {
                    "maxPercentage": 3.0
                }
            }
        },
        {
            "Lawn & Garden- Chemical Pest Control, Mosquito nets, Bird control, Plant protection, Foggers": {
                "referralPercentage": {
                    "1000": 7.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Lawn & Garden - Solar Devices (Panels, Inverters, Charge controller, Battery, Lights, Solar gadgets)": {
                "referralPercentage": {
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Lawn and Garden - Planters, Fertilisers, Watering and other subcategories": {
                "referralPercentage": {
                    "300": 13.0,
                    "15000": 10.0,
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Lawn and Garden - Plants, Seeds & Bulbs": {
                "referralPercentage": {
                    "500": 9.5,
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Lawn & Garden - Outdoor equipments (Saws, Lawn Mowers, Cultivator, Tiller, String Trimmers, Water Pumps, Generators, Barbeque Grills, Greenhouses)": {
                "referralPercentage": {
                    "maxPercentage": 6.5
                }
            }
        }
    ],
    "Kitchen, Large & Small Appliances": [
        {
            "Kitchen- Non Appliances": {
                "referralPercentage": {
                    "300": 6.0,
                    "maxPercentage": 11.5
                }
            }
        },
        {
            "Kitchen - Glassware & Ceramicware": {
                "referralPercentage": {
                    "300": 6.0,
                    "1000": 11.0,
                    "maxPercentage": 12.5
                }
            }
        },
        {
            "Kitchen - Gas Stoves & Pressure Cookers": {
                "referralPercentage": {
                    "1500": 6.0,
                    "maxPercentage": 10.0
                }
            }
        },
        {
            "Cookware, Tableware & Dinnerware": {
                "referralPercentage": {
                    "500": 7.0,
                    "1000": 9.0,
                    "maxPercentage": 12.5
                }
            }
        },
        {
            "Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories": {
                "referralPercentage": {
                    "300": 5.0,
                    "1000": 11.5,
                    "maxPercentage": 12.5
                }
            }
        },
        {
            "Kitchen & Bath fixtures, Cleaning Supplies, Hardware, Electricals and Building Materials": {
                "referralPercentage": {
                    "300": 5.0,
                    "maxPercentage": 12.0
                }
            }
        },
        {
            "Large Appliances (excl. Accessories, Refrigerators and Chimneys)": {
                "referralPercentage": {
                    "maxPercentage": 5.5
                }
            }
        },
        {
            "Large Appliances - Accessories": {
                "referralPercentage": {
                    "maxPercentage": 16.0
                }
            }
        },
        {
            "Large Appliances - Chimneys": {
                "referralPercentage": {
                    "maxPercentage": 9.5
                }
            }
        },
        {
            "Large Appliances – Refrigerators": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Small Appliances": {
                "referralPercentage": {
                    "5000": 6.5,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Fans and Robotic Vacuums": {
                "referralPercentage": {
                    "3000": 6.5,
                    "maxPercentage": 8.0
                }
            }
        }
    ],
    "Sports, Gym & Sporting Equipment": [
        {
            "Bicycles": {
                "referralPercentage": {
                    "300": 11.0,
                    "500": 6.5,
                    "1000": 7.0,
                    "maxPercentage": 6.0
                }
            }
        },
        {
            "Gym Equipments": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 8.0,
                    "1000": 10.0,
                    "maxPercentage": 12.0
                }
            }
        },
        {
            "Sports- Cricket and Badminton Equipments, Tennis, Table Tennis , Squash, Football, Volleyball, Basketball , Throwball, Swimming": {
                "referralPercentage": {
                    "300": 5.0,
                    "500": 6.0,
                    "1000": 8.0,
                    "maxPercentage": 8.5
                }
            }
        },
        {
            "Sports Collectibles": {
                "referralPercentage": {
                    "300": 13.0,
                    "maxPercentage": 17.0
                }
            }
        },
        {
            "Sports & Outdoors - Footwear": {
                "referralPercentage": {
                    "500": 14.0,
                    "1000": 14.5,
                    "maxPercentage": 16.0
                }
            }
        }
    ],
    "Others": [
        {
            "Coin Collectibles": {
                "referralPercentage": {
                    "maxPercentage": 15.0
                }
            }
        },
        {
            "Silver Coins & Bars": {
                "referralPercentage": {
                    "maxPercentage": 3.0
                }
            }
        },
        {
            "Furniture - Other products": {
                "referralPercentage": {
                    "15000": 15.5,
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Toys - Other Products": {
                "referralPercentage": {
                    "300": 9.0,
                    "1000": 9.5,
                    "maxPercentage": 11.5
                }
            }
        },
        {
            "Grocery - Other Products": {
                "referralPercentage": {
                    "1000": 7.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Office - Other products": {
                "referralPercentage": {
                    "500": 10.0,
                    "1000": 10.5,
                    "maxPercentage": 11.5
                }
            }
        },
        {
            "Personal Care Appliances - Other Products": {
                "referralPercentage": {
                    "300": 7.5,
                    "500": 10.5,
                    "1000": 11.0,
                    "maxPercentage": 7.5
                }
            }
        },
        {
            "Health & Personal Care (HPC) - Other Subcategories": {
                "referralPercentage": {
                    "maxPercentage": 11.0
                }
            }
        },
        {
            "Beauty - Other Products": {
                "referralPercentage": {
                    "300": 6.5,
                    "500": 7.0,
                    "maxPercentage": 9.0
                }
            }
        },
        {
            "Health and Personal Care - Other Household Supplies": {
                "referralPercentage": {
                    "500": 4.5,
                    "maxPercentage": 6.5
                }
            }
        },
        {
            "Health and Household - Other Products": {
                "referralPercentage": {
                    "maxPercentage": 11.5
                }
            }
        },
        {
            "Business & Industrial Supplies - Other Products": {
                "referralPercentage": {
                    "15000": 8.0,
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Home - Other Subcategories": {
                "referralPercentage": {
                    "maxPercentage": 17.0
                }
            }
        },
        {
            "Kitchen - Other Products": {
                "referralPercentage": {
                    "300": 6.0,
                    "1000": 11.5,
                    "maxPercentage": 12.5
                }
            }
        },
        {
            "Lawn and Garden - Other products": {
                "referralPercentage": {
                    "300": 9.0,
                    "15000": 10.0,
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Luggage - Other products": {
                "referralPercentage": {
                    "300": 6.0,
                    "500": 9.0,
                    "maxPercentage": 8.0
                }
            }
        },
        {
            "Fine Art": {
                "referralPercentage": {
                    "maxPercentage": 20.0
                }
            }
        },
        {
            "Baby - Other Products": {
                "referralPercentage": {
                    "300": 3.5,
                    "500": 6.5,
                    "1000": 9.0,
                    "maxPercentage": 7.0
                }
            }
        },
        {
            "Pet - Other Products": {
                "referralPercentage": {
                    "300": 2.0,
                    "500": 11.0,
                    "1000": 12.0
                }
            }
        },
        {
            "Apparel - Other Products": {
                "referralPercentage": {
                    "500": 11.0,
                    "1000": 18.5,
                    "maxPercentage": 19.0
                }
            }
        },
        {
            "Home - other products": {
                "referralPercentage": {
                    "maxPercentage": 18.0
                }
            }
        },
        {
            "Home improvement - other products": {
                "referralPercentage": {
                    "maxPercentage": 13.5
                }
            }
        },
        {
            "Indoor Lighting - Others": {
                "referralPercentage": {
                    "500": 13.0,
                    "maxPercentage": 16.0
                }
            }
        },
        {
            "Sports - Other products": {
                "referralPercentage": {
                    "300": 5.0,
                    "500": 9.0,
                    "maxPercentage": 13.0
                }
            }
        },
        {
            "Automotive - Other products": {
                "referralPercentage": {
                    "maxPercentage": 15.0
                }
            }
        },
        {
            "Consumable Physical Gift Card": {
                "referralPercentage": {
                    "maxPercentage": 5.0
                }
            }
        },
        {
            "Warranty Services": {
                "referralPercentage": {
                    "maxPercentage": 30.0
                }
            }
        }
    ]
};


// for making submenu by selecting fromo main menu
function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("categorySelect").innerHTML = "<option></option>";
    else {
        var subMenu = "";
        for (let categoryId in referralFeesByCategory[value]) {
            subMenu += "<option>" + Object.keys(referralFeesByCategory[value][categoryId]) + "</option>";
        }
        document.getElementById("categorySelect").innerHTML = subMenu;
    }
}
// variable declaration
let selectedCategory, selectedSubCategories, sellingPrice, costPrice, referralPercentage, referalFeePercentageValue,
    closingFee, productGST;

let productVolume, volumetricWeight, productWeight;


function calculateResult() {
    let selectedCategory = document.getElementById("category").value;
    let SubCategories = document.getElementById("categorySelect").value;
    // alert(selectedCategory + "\n" + SubCategories);

    for (let categoryId in referralFeesByCategory[selectedCategory]) {
        if (Object.keys(referralFeesByCategory[selectedCategory][categoryId]) == SubCategories) {
            referralPercentage = ((referralFeesByCategory[selectedCategory][categoryId])[SubCategories]).referralPercentage

        }
    }
    sellingPrice = sellingP.value;
    costPrice = costPriceId.value;
    productGST = gst.value;
    let range = Object.keys(referralPercentage) // getting range 
    for (let i = 0; i < range.length ; i++) {
        if (!Number(sellingPrice)) {
            alert("please enter selling price")
            return;
        }
        else if(range.length == 1){
            console.log({referralPercentage})
            referalFeePercentageValue = referralPercentage[range[0]]
        }
        else if (Number(sellingPrice) <= Number(range[i])) {
            console.log(sellingPrice, "<=", range[i]) // 
            console.log(referralPercentage[range[i]]); // value of range 
            referalFeePercentageValue = referralPercentage[range[i]]  // assigning value of range in this variable
            break;
        }
        else if (Number(sellingPrice) > Number(range[range.length - 2])) {
            console.log(sellingPrice, ">", range[range.length - 2]);
            referalFeePercentageValue = referralPercentage[range[range.length - 1]]
            console.log("out of range");
            break;
        }

    }

    // getting actual referal in the output
    let amazonReferalValue = Number(sellingPrice * (referalFeePercentageValue / 100));
    amazonReferalValue = Math.round(amazonReferalValue * 100) / 100
    referalFee.innerHTML = amazonReferalValue;

      // condition for closing fee
      switch (true) {
        case sellingPrice <= 250:
            closingFee = 4;
            break;
        case sellingPrice > 250 && sellingPrice <= 500:
            closingFee = 9;
            break;
        case sellingPrice > 500 && sellingPrice <= 1000:
            closingFee = 30;
            break;
        case sellingPrice > 1000:
            closingFee = 61;
            break;
    }
    // showing output in webPage with id="closing-fee"
    closingFeeId.innerHTML = closingFee;


    // Shipping charge Calculation
    let localCharge, regionalCharge, nationalCharge;

    if (document.getElementById('isShippingExcluded').checked) { // if shipping excluded in selling price
        localCharge = Number(excludedshippingLocalId.value);
        regionalCharge = Number(excludedshippingRegionalId.value);
        nationalCharge = Number(excludedshippingNationalId.value);

        shippingCharge[0].innerHTML = localCharge;
        shippingCharge[1].innerHTML = regionalCharge;
        shippingCharge[2].innerHTML = nationalCharge;
    }
    else { // if included

        // calculating volumetric weight in cm3
        let height = Number(heightId.value);
        let width = Number(widthId.value);
        let length = Number(lengthId.value);
        // productVolume = (height * width * length);
        volumetricWeight = (height * width * length) / 5

        // actual Weight in kg
        let weight = weightId.value;
        let shipingWeight = volumetricWeight > weight ? volumetricWeight : weight;

        let shipping = {
            local: 44,
            regional: 53,
            national: 74
        };

        switch (true) {
            case !shipingWeight:
                alert("please enter the weight or dimension!!!")
                break;
            case shipingWeight <= 500:
                console.log("inside switch");
                localCharge = shipping.local;
                regionalCharge = shipping.regional;
                nationalCharge = shipping.national;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 500 && shipingWeight <= 1000:
                console.log("inside switch");
                localCharge = shipping.local + 13;
                regionalCharge = shipping.regional + 17;
                nationalCharge = shipping.national + 25;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 1000 && shipingWeight <= 2000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21;
                regionalCharge = shipping.regional + 17 + 27;
                nationalCharge = shipping.national + 25 + 33;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 2000 && shipingWeight <= 3000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 2;
                regionalCharge = shipping.regional + 17 + 27 * 2;
                nationalCharge = shipping.national + 25 + 33 * 2;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 3000 && shipingWeight <= 4000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 3;
                regionalCharge = shipping.regional + 17 + 27 * 3;
                nationalCharge = shipping.national + 25 + 33 * 3;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 4000 && shipingWeight <= 5000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4;
                regionalCharge = shipping.regional + 17 + 27 * 4;
                nationalCharge = shipping.national + 25 + 33 * 4;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 5000 && shipingWeight <= 6000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;
            case shipingWeight > 6000 && shipingWeight <= 7000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12 * 2;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13 * 2;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16 * 2;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge
                shippingCharge[2].innerHTML = nationalCharge
                break;
            case shipingWeight > 7000 && shipingWeight <= 8000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12 * 3;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13 * 3;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16 * 3;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;
            case shipingWeight > 8000 && shipingWeight <= 9000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12 * 4;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13 * 4;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16 * 4;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;
            case shipingWeight > 9000 && shipingWeight <= 10000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12 * 5;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13 * 5;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16 * 5;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;
            case shipingWeight > 10000 && shipingWeight <= 11000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12 * 6;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13 * 6;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16 * 6;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;
            case shipingWeight > 11000 && shipingWeight <= 12000:
                console.log("inside switch");
                localCharge = shipping.local + 13 + 21 * 4 + 12 * 7;
                regionalCharge = shipping.regional + 17 + 27 * 4 + 13 * 7;
                nationalCharge = shipping.national + 25 + 33 * 4 + 16 * 7;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            case shipingWeight > 17000 && shipingWeight <= 18000:
                console.log("inside switch");
                localCharge = 222;
                regionalCharge = 313;
                nationalCharge = 443;

                shippingCharge[0].innerHTML = localCharge;
                shippingCharge[1].innerHTML = regionalCharge;
                shippingCharge[2].innerHTML = nationalCharge;
                break;

            default:
                alert("please fill the weight or volumetric weight upto 12Kg Range or 18Kg !!")
                break;
        }

    }

    console.log({ localCharge, regionalCharge, nationalCharge })
    let ACSChargeLocal, ACSChargeRegional, ACSChargeNational;
    console.log({ amazonReferalValue, closingFee, localCharge, regionalCharge, nationalCharge });
    ACSChargeLocal = amazonReferalValue + closingFee + localCharge;
    ACSChargeRegional = amazonReferalValue + closingFee + regionalCharge;
    ACSChargeNational = amazonReferalValue + closingFee + nationalCharge;

    ACSChargeLocal = Math.round(ACSChargeLocal * 100) / 100
    ACSChargeRegional = Math.round(ACSChargeRegional * 100) / 100
    ACSChargeNational = Math.round(ACSChargeNational * 100) / 100

    ACSChargeId[0].innerHTML = ACSChargeLocal;
    ACSChargeId[1].innerHTML = ACSChargeRegional;
    ACSChargeId[2].innerHTML = ACSChargeNational;



    // 18% gst charges on ACS charge
    let gstOnACSChargesLocal = Math.round(ACSChargeLocal * 18) / 100;
    let gstOnACSChargesRegional = Math.round(ACSChargeRegional * 18) / 100;
    let gstOnACSChargesNational = Math.round(ACSChargeNational * 18) / 100;

    GstACSChargeId[0].innerHTML = gstOnACSChargesLocal;
    GstACSChargeId[1].innerHTML = gstOnACSChargesRegional;
    GstACSChargeId[2].innerHTML = gstOnACSChargesNational;


    // total charges calculation
    let totalChargeLocal = (Math.round((ACSChargeLocal + gstOnACSChargesLocal) * 100)) / 100;
    let totalChargeRegional = (Math.round((ACSChargeRegional + gstOnACSChargesRegional) * 100)) / 100;
    let totalChargeNational = (Math.round((ACSChargeNational + gstOnACSChargesNational) * 100)) / 100;

    totalChargeId[0].innerHTML = totalChargeLocal;
    totalChargeId[1].innerHTML = totalChargeRegional;
    totalChargeId[2].innerHTML = totalChargeNational;





    // calculating payableTax and selling tax
    let sellingTax, payableTaxLocal, payableTaxRegional, payableTaxNational, costPriceTax;

    //selling tax
    sellingTax = (sellingPrice * productGST) / (100 + productGST);
    sellingTax = Math.round(sellingTax * 100) / 100;

    //cost tax
    costPriceTax = (costPrice * productGST) / 100;

    payableTaxLocal = sellingTax - gstOnACSChargesLocal - costPriceTax;
    payableTaxRegional = sellingTax - gstOnACSChargesRegional - costPriceTax;
    payableTaxNational = sellingTax - gstOnACSChargesNational - costPriceTax;

    // when payble tax is negative
    if (payableTaxLocal < 0) {
        payableTaxLocal = 0; // Local
    }
    if (payableTaxRegional < 0) {
        payableTaxRegional = 0; // Regional
    }
    if (payableTaxNational < 0) {
        payableTaxNational = 0; // National
    }

    // Bank settlement amount 
    let bankSettlementLocal, bankSettlementRegional, bankSettlementNational;

    bankSettlementLocal = Math.round((sellingPrice - totalChargeLocal) * 100) / 100;
    bankSettlementRegional = Math.round((sellingPrice - totalChargeRegional) * 100) / 100;
    bankSettlementNational = Math.round((sellingPrice - totalChargeNational) * 100) / 100;


    // checking if discount or deals is applied
    if (document.getElementById("DiscountOnAmount").checked) {
        bankSettlementLocal = Math.round((sellingPrice - totalChargeLocal - Number(discountDeals.value)) * 100) / 100;
        bankSettlementRegional = Math.round((sellingPrice - totalChargeRegional - Number(discountDeals.value)) * 100) / 100;
        bankSettlementNational = Math.round((sellingPrice - totalChargeNational - Number(discountDeals.value)) * 100) / 100;
    }
    else if (document.getElementById("DiscountOnPercent").checked) {
        let discountDealsByPerc = (Number(discountDeals.value) * sellingPrice) / 100

        bankSettlementLocal = Math.round((sellingPrice - totalChargeLocal - discountDealsByPerc) * 100) / 100;
        bankSettlementRegional = Math.round((sellingPrice - totalChargeRegional - discountDealsByPerc) * 100) / 100;
        bankSettlementNational = Math.round((sellingPrice - totalChargeNational - discountDealsByPerc) * 100) / 100;
    }

    bankSettlementId[0].innerHTML = bankSettlementLocal;
    bankSettlementId[1].innerHTML = bankSettlementRegional;
    bankSettlementId[2].innerHTML = bankSettlementNational;


    // return loss calculaion
    let returnLossLocal = 0, returnLossRegional = 0, returnLossNational = 0;
    let returnRate = Number(returnRateId.value);
    if (document.getElementById("returnOnAmount").checked) {
        returnLossLocal = Number(returnRateId.value);
        returnLossRegional = Number(returnRateId.value);
        returnLossNational = Number(returnRateId.value);
    }
    else if (document.getElementById("returnOnPercentage").checked) {

        returnLossLocal = (localCharge * returnRate) / (100 - returnRate);
        returnLossRegional = (regionalCharge * returnRate) / (100 - returnRate);
        returnLossNational = (nationalCharge * returnRate) / (100 - returnRate);

        returnLossLocal = Math.round(returnLossLocal * 100) / 100;
        returnLossRegional = Math.round(returnLossRegional * 100) / 100;
        returnLossNational = Math.round(returnLossNational * 100) / 100;
    }


    // profit calculation
    let profitLocal, profitRegional, profitNational;
    console.log({ bankSettlementLocal, costPrice, costPriceTax, payableTaxLocal, returnLossLocal })
    profitLocal = Math.round((bankSettlementLocal - costPrice - costPriceTax - payableTaxLocal - returnLossLocal) * 100) / 100;
    profitRegional = Math.round((bankSettlementRegional - costPrice - costPriceTax - payableTaxRegional - returnLossRegional) * 100) / 100;
    profitNational = Math.round((bankSettlementNational - costPrice - costPriceTax - payableTaxLocal - returnLossNational) * 100) / 100;

    profitId[0].innerHTML = profitLocal;
    profitId[1].innerHTML = profitRegional;
    profitId[2].innerHTML = profitNational;




}




// function resetSelection() {
//     document.getElementById("category").selectedIndex = 0;
//     document.getElementById("categorySelect").selectedIndex = 0;
// }
// category js end

function showInputBlock(idName) {
    let inputBlock = document.getElementById(idName)

    inputBlock.style.display = "block"

}
function hideInputBlock(idName) {
    let inputBlock = document.getElementById(idName)

    inputBlock.style.display = "none"

}
