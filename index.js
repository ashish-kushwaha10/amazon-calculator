

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


var referralFeesByCategory = [
    {
        "School Textbook Bundles": {
            "referralPercentage": {
                "250": 2.0,
                "1000": 3.0,
                "1500": 4.0,
                "maxPercentage": 4.5
            }
        }
    },
    {
        "Books": {
            "referralPercentage": {
                "250": 3.0,
                "500": 4.5,
                "1000": 9.0,
                "maxPercentage": 13.5
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
        "Software products": {
            "referralPercentage": {
                "maxPercentage": 9.5
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
        "Video Games - Consoles": {
            "referralPercentage": {
                "1000": 7.0,
                "maxPercentage": 9.0
            }
        }
    },
    {
        "Video Games - Accessories": {
            "referralPercentage": {
                "500": 10.5,
                "maxPercentage": 13.5
            }
        }
    },
    {
        "Video Games - Online Game Services": {
            "referralPercentage": {
                "500": 2.0,
                "maxPercentage": 3.5
            }
        }
    },
    {
        "Video Games - Other products": {
            "referralPercentage": {
                "500": 9.0,
                "1000": 10.0,
                "maxPercentage": 12.0
            }
        }
    },
    {
        "Toys - Drones": {
            "referralPercentage": {
                "300": 7.5,
                "500": 16.0,
                "1000": 11.5,
                "maxPercentage": 12.0
            }
        }
    },
    {
        "Toys - Balloons and Soft Toys": {
            "referralPercentage": {
                "maxPercentage": 11.0
            }
        }
    },
    {
        "Toys - Other products": {
            "referralPercentage": {
                "300": 9.0,
                "1000": 9.5,
                "maxPercentage": 11.5
            }
        }
    },
    {
        "Pet Foods": {
            "referralPercentage": {
                "300": 5.5,
                "1000": 11.5,
                "maxPercentage": 12.5
            }
        }
    },
    {
        "Pet - Other products": {
            "referralPercentage": {
                "300": 2.0,
                "500": 10.0,
                "maxPercentage": 12.0
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
        "Beauty - Make-up": {
            "referralPercentage": {
                "300": 6.0,
                "500": 4.5,
                "1000": 7.5,
                "maxPercentage": 7.0
            }
        }
    },
    {
        "Deodorants": {
            "referralPercentage": {
                "300": 8.5,
                "1000": 6.5,
                "maxPercentage": 7.0
            }
        }
    },
    {
        "Facial Steamers": {
            "referralPercentage": {
                "300": 7.0,
                "500": 6.5,
                "maxPercentage": 7.0
            }
        }
    },
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
        "Moisturizer Cream": {
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
                "300": 5.5,
                "500": 6.0,
                "1000": 9.0,
                "maxPercentage": 9.5
            }
        }
    },
    {
        "Beauty - Other products": {
            "referralPercentage": {
                "300": 6.5,
                "500": 7.0,
                "maxPercentage": 9.0
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
        "Health and Household - Medical Equipment, Sexual Wellness, Adult Incontinence, Elderly Care": {
            "referralPercentage": {
                "maxPercentage": 8.0
            }
        }
    },
    {
        "Health and Household - Sports Nutrition and Meal Replacement Shakes": {
            "referralPercentage": {
                "maxPercentage": 9.0
            }
        }
    },
    {
        "Health and Household - Ayurvedic, Homeopathic and Alternate Medicine products": {
            "referralPercentage": {
                "500": 6.0,
                "1000": 7.0,
                "maxPercentage": 8.0
            }
        }
    },
    {
        "Health and Household - Household Cleaning, Laundry, Air Fresheners, Personal Hygiene (Hand Wash, Feminine Hygiene and Oral Care)": {
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
        "Health and Household - Other products": {
            "referralPercentage": {
                "300": 9.5,
                "maxPercentage": 11.5
            }
        }
    },
    {
        "Baby Hardlines - Swings, Bouncers and Rockers, Carriers, Walkers, Baby Safety - Guards and Locks, Baby Room Décor, Baby Furniture, Baby Car Seats and Accessories": {
            "referralPercentage": {
                "300": 6.0,
                "500": 8.5,
                "1000": 6.0,
                "maxPercentage": 7.5
            }
        }
    },
    {
        "Baby Strollers": {
            "referralPercentage": {
                "300": 4.0,
                "1000": 6.0,
                "maxPercentage": 10.0
            }
        }
    },
    {
        "Baby - Diapers": {
            "referralPercentage": {
                "300": 5.0,
                "500": 5.5,
                "maxPercentage": 9.5
            }
        }
    },
    {
        "Baby - Other products": {
            "referralPercentage": {
                "300": 3.5,
                "500": 6.5,
                "1000": 9.0,
                "maxPercentage": 7.0
            }
        }
    },
    {
        "Grocery - Herbs and Spices": {
            "referralPercentage": {
                "300": 4.0,
                "1000": 5.5,
                "maxPercentage": 8.0
            }
        }
    },
    {
        "Grocery - Dried Fruits and Nuts": {
            "referralPercentage": {
                "500": 6.0,
                "1000": 8.0,
                "maxPercentage": 9.0
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
        "Grocery and Gourmet - Oils": {
            "referralPercentage": {
                "1000": 7.5,
                "maxPercentage": 9.0
            }
        }
    },
    {
        "Grocery and Gourmet - Other products": {
            "referralPercentage": {
                "1000": 7.0,
                "maxPercentage": 9.0
            }
        }
    },
    {
        "OTC Medicine": {
            "referralPercentage": {
                "500": 12.0,
                "maxPercentage": 15.0
            }
        }
    },
    {
        "Pharmacy - Prescription Medicines": {
            "referralPercentage": {
                "maxPercentage": 6.0
            }
        }
    },
    {
        "Personal Care Appliances - Weighing Scales and Fat Analysers": {
            "referralPercentage": {
                "300": 11.0,
                "500": 10.5,
                "maxPercentage": 13.5
            }
        }
    },
    {
        "Personal Care Appliances - Grooming and Styling": {
            "referralPercentage": {
                "500": 11.0,
                "1000": 10.0,
                "maxPercentage": 9.0
            }
        }
    },
    {
        "Personal Care Appliances - Electric Massagers": {
            "referralPercentage": {
                "500": 9.5,
                "1000": 13.5,
                "maxPercentage": 14.5
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
        "Personal Care Appliances - Other products": {
            "referralPercentage": {
                "300": 7.5,
                "500": 10.5,
                "1000": 11.0,
                "maxPercentage": 7.5
            }
        }
    },
    {
        "Apparel - Women’s Innerwear and Lingerie": {
            "referralPercentage": {
                "500": 12.0,
                "1000": 18.0,
                "maxPercentage": 15.0
            }
        }
    },
    {
        "Apparel - Sarees & Dress Materials": {
            "referralPercentage": {
                "300": 10.0,
                "500": 8.0,
                "1000": 12.0,
                "maxPercentage": 23.0
            }
        }
    },
    {
        "Apparel - Sweat Shirts and Jackets": {
            "referralPercentage": {
                "500": 8.0,
                "maxPercentage": 12.0
            }
        }
    },
    {
        "Apparel Other Innerwear": {
            "referralPercentage": {
                "300": 12.0,
                "500": 11.0,
                "1000": 16.5,
                "maxPercentage": 18.5
            }
        }
    },
    {
        "Sleepwear": {
            "referralPercentage": {
                "500": 10.0,
                "1000": 16.0,
                "maxPercentage": 19.0
            }
        }
    },
    {
        "Apparel - Accessories": {
            "referralPercentage": {
                "500": 13.0,
                "maxPercentage": 19.0
            }
        }
    },
    {
        "Apparel - Men's T-Shirts (except Tank Tops and Full Sleeve Tops)": {
            "referralPercentage": {
                "300": 2.0,
                "500": 5.0,
                "maxPercentage": 21.0
            }
        }
    },
    {
        "Apparel - Ethnic Wear": {
            "referralPercentage": {
                "300": 6.5,
                "500": 4.0,
                "1000": 8.0,
                "maxPercentage": 17.5
            }
        }
    },
    {
        "Apparel - Baby": {
            "referralPercentage": {
                "300": 6.0,
                "500": 7.5,
                "1000": 14.0,
                "maxPercentage": 20.0
            }
        }
    },
    {
        "Apparel - Shorts": {
            "referralPercentage": {
                "300": 16.5,
                "500": 13.5,
                "1000": 23.5,
                "maxPercentage": 24.0
            }
        }
    },
    {
        "Apparel - Other products": {
            "referralPercentage": {
                "300": 6.0,
                "500": 6.5,
                "1000": 15.0,
                "maxPercentage": 19.0
            }
        }
    },
    {
        "Eyewear - Sunglasses, Frames and Zero Power Eye Glasses": {
            "referralPercentage": {
                "500": 14.0,
                "1000": 14.5,
                "maxPercentage": 18.5
            }
        }
    },
    {
        "Watches": {
            "referralPercentage": {
                "maxPercentage": 14.0
            }
        }
    },
    {
        "Flip Flops": {
            "referralPercentage": {
                "500": 13.0,
                "1000": 12.5,
                "maxPercentage": 15.0
            }
        }
    },
    {
        "Kids Shoes": {
            "referralPercentage": {
                "300": 10.0,
                "1000": 14.0,
                "maxPercentage": 16.0
            }
        }
    },
    {
        "Shoes": {
            "referralPercentage": {
                "300": 15.0,
                "1000": 14.5,
                "maxPercentage": 16.5
            }
        }
    },
    {
        "Wallets": {
            "referralPercentage": {
                "500": 10.0,
                "1000": 12.5,
                "maxPercentage": 14.0
            }
        }
    },
    {
        "Backpacks": {
            "referralPercentage": {
                "300": 12.0,
                "500": 10.0,
                "1000": 12.0,
                "maxPercentage": 14.5
            }
        }
    },
    {
        "Handbags": {
            "referralPercentage": {
                "300": 2.0,
                "500": 10.0,
                "1000": 11.0,
                "maxPercentage": 12.0
            }
        }
    },
    {
        "Luggage - Suitcase & Trolleys": {
            "referralPercentage": {
                "500": 7.5,
                "1000": 6.5,
                "maxPercentage": 5.5
            }
        }
    },
    {
        "Luggage - Travel Accessories": {
            "referralPercentage": {
                "300": 10.0,
                "500": 9.0,
                "1000": 10.0,
                "maxPercentage": 12.0
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
        "Silver Jewellery": {
            "referralPercentage": {
                "1000": 10.5,
                "maxPercentage": 13.0
            }
        }
    },
    {
        "Silver coins and Bars": {
            "referralPercentage": {
                "maxPercentage": 3.0
            }
        }
    },
    {
        "Fine Jewellery - Unstudded and Solitaire": {
            "referralPercentage": {
                "maxPercentage": 5.0
            }
        }
    },
    {
        "Fine Jewellery - Studded": {
            "referralPercentage": {
                "maxPercentage": 13.0
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
        "Fashion Jewellery": {
            "referralPercentage": {
                "500": 17.5,
                "maxPercentage": 22.5
            }
        }
    },
    {
        "Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories": {
            "referralPercentage": {
                "300": 2.0,
                "500": 5.0,
                "maxPercentage": 12.5
            }
        }
    },
    {
        "Cookware, Tableware and Dinnerware": {
            "referralPercentage": {
                "500": 5.0,
                "1000": 9.0,
                "maxPercentage": 12.5
            }
        }
    },
    {
        "Kitchen - Glassware and Ceramicware": {
            "referralPercentage": {
                "500": 4.0,
                "1000": 11.0,
                "maxPercentage": 12.5
            }
        }
    },
    {
        "Gas Stoves and Pressure Cookers": {
            "referralPercentage": {
                "1500": 6.0,
                "maxPercentage": 10.0
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
        "Containers, Boxes, Bottles and Kitchen Storage": {
            "referralPercentage": {
                "300": 2.0,
                "500": 5.0,
                "maxPercentage": 12.0
            }
        }
    },
    {
        "Slipcovers and Kitchen Linens": {
            "referralPercentage": {
                "300": 7.5,
                "500": 11.5,
                "maxPercentage": 15.5
            }
        }
    },
    {
        "Kitchen - Other products": {
            "referralPercentage": {
                "500": 5.0,
                "1000": 11.5,
                "maxPercentage": 12.5
            }
        }
    },
    {
        "Wall Art": {
            "referralPercentage": {
                "300": 5.0,
                "500": 11.0,
                "maxPercentage": 13.5
            }
        }
    },
    {
        "Home Fragrance and Candles": {
            "referralPercentage": {
                "300": 2.0,
                "500": 7.5,
                "maxPercentage": 12.5
            }
        }
    },
    {
        "Home Furnishing (Excluding Curtain and Curtain Accessories)": {
            "referralPercentage": {
                "300": 2.0,
                "1000": 7.0,
                "maxPercentage": 11.0
            }
        }
    },
    {
        "Bedsheets, Blankets and Covers": {
            "referralPercentage": {
                "500": 3.0,
                "1000": 7.0,
                "maxPercentage": 8.5
            }
        }
    },
    {
        "Home Storage (Excluding Kitchen Containers, Boxes, Bottles and Kitchen Storage)": {
            "referralPercentage": {
                "300": 5.5,
                "1000": 11.0,
                "maxPercentage": 15.0
            }
        }
    },
    {
        "Home - Waste and Recycling": {
            "referralPercentage": {
                "300": 7.5,
                "maxPercentage": 8.0
            }
        }
    },
    {
        "Craft Materials": {
            "referralPercentage": {
                "500": 2.0,
                "maxPercentage": 5.0
            }
        }
    },
    {
        "Home Decor Products": {
            "referralPercentage": {
                "300": 6.0,
                "1000": 12.0,
                "maxPercentage": 17.0
            }
        }
    },
    {
        "Clocks": {
            "referralPercentage": {
                "300": 4.0,
                "1000": 9.0,
                "maxPercentage": 10.0
            }
        }
    },
    {
        "LED Bulbs and Battens": {
            "referralPercentage": {
                "300": 2.0,
                "500": 6.5,
                "maxPercentage": 14.0
            }
        }
    },
    {
        "Indoor Lighting - Wall, Ceiling Fixture Lights, Lamp Bases, Lamp Shades and Smart Lighting": {
            "referralPercentage": {
                "500": 6.0,
                "1000": 14.5,
                "maxPercentage": 11.5
            }
        }
    },
    {
        "Indoor Lighting - Other products": {
            "referralPercentage": {
                "300": 4.5,
                "500": 8.5,
                "1000": 11.5,
                "maxPercentage": 16.0
            }
        }
    },
    {
        "Cushion Covers": {
            "referralPercentage": {
                "300": 3.0,
                "500": 7.0,
                "maxPercentage": 10.0
            }
        }
    },
    {
        "Curtains and Curtain Accessories": {
            "referralPercentage": {
                "300": 15.5,
                "500": 16.5,
                "1000": 11.5,
                "maxPercentage": 16.5
            }
        }
    },
    {
        "Rugs and Doormats": {
            "referralPercentage": {
                "300": 4.0,
                "maxPercentage": 9.0
            }
        }
    },
    {
        "Doors and Windows (Wooden, Metal, PVC / UPVC Doors & Windows)": {
            "referralPercentage": {
                "maxPercentage": 10.0
            }
        }
    },
    {
        "Sanitaryware - Toilets, Bathtubs, Basins / Sinks, Bath Mirrors & Vanities, and Shower Enclosures / Partitions": {
            "referralPercentage": {
                "maxPercentage": 10.0
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
        "Wires (Electrical Wires / Cables for House Wiring, ad hoc usage)": {
            "referralPercentage": {
                "maxPercentage": 10.0
            }
        }
    },
    {
        "Home - Other products": {
            "referralPercentage": {
                "500": 10.0,
                "1000": 13.0,
                "maxPercentage": 18.0
            }
        }
    },
    {
        "Home Improvement - Wallpapers & Wallpaper Accessories": {
            "referralPercentage": {
                "500": 9.0,
                "1000": 8.0,
                "maxPercentage": 6.5
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
        "Home Improvement Accessories": {
            "referralPercentage": {
                "maxPercentage": 13.5
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
        "Home improvement - Kitchen & Bath (Fittings, accessories), Cleaning Supplies, Electricals, Hardware, Building Materials": {
            "referralPercentage": {
                "300": 5.0,
                "500": 10.0,
                "maxPercentage": 12.0
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
        "Home Safety & Security Systems": {
            "referralPercentage": {
                "maxPercentage": 6.0
            }
        }
    },
    {
        "Home Improvement - Other products": {
            "referralPercentage": {
                "maxPercentage": 13.5
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
        "Lawn & Garden - Solar Panels": {
            "referralPercentage": {
                "maxPercentage": 6.0
            }
        }
    },
    {
        "Lawn & Garden - Leaf Blower and Water Pump": {
            "referralPercentage": {
                "maxPercentage": 6.5
            }
        }
    },
    {
        "Lawn & Garden - Solar Devices, Inverters, Charge Controller, Battery, Lights, Solar Gadgets": {
            "referralPercentage": {
                "maxPercentage": 8.0
            }
        }
    },
    {
        "Lawn & Garden - Chemical Pest Control, Mosquito Nets, Bird Control, Plant Protection, Foggers": {
            "referralPercentage": {
                "1000": 7.0,
                "maxPercentage": 9.0
            }
        }
    },
    {
        "Lawn & Garden - Outdoor equipments, Saws, Lawn Mowers, Cultivator, Tiller, String Trimmers, Generators, Barbeque Grills, Greenhouses": {
            "referralPercentage": {
                "maxPercentage": 6.5
            }
        }
    },
    {
        "Lawn and Garden - Plants, Seeds, Bulbs and Gardening Tools": {
            "referralPercentage": {
                "500": 9.5,
                "maxPercentage": 11.0
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
    }
];


// Assume referralFeesByCategory is already defined
var selectedReferralPercentages = {};

// Populate the dropdown
var categoryDropdown = document.getElementById('categoryDropdown');
var categorySearch = document.getElementById('categorySearch');

referralFeesByCategory.forEach(function(category) {
    for (var key in category) {
        if (category.hasOwnProperty(key)) {
            var div = document.createElement('div');
            div.textContent = key;
            div.setAttribute('data-value', key);
            div.addEventListener('click', function() {
                categorySearch.value = key;
                updateReferralPercentages(key);
                categoryDropdown.classList.remove('show');
            });
            categoryDropdown.appendChild(div);
        }
    }
});

// Function to update selectedReferralPercentages when a category is selected
function updateReferralPercentages(selectedCategory) {
    referralFeesByCategory.forEach(function(category) {
        if (category.hasOwnProperty(selectedCategory)) {
            selectedReferralPercentages = category[selectedCategory].referralPercentage;
        }
    });
}

// Function to filter the dropdown based on the search input
function filterFunction() {
    var filter = categorySearch.value.toLowerCase();
    var divs = categoryDropdown.getElementsByTagName('div');
    var count = 0;
    for (var i = 0; i < divs.length; i++) {
        var txtValue = divs[i].textContent || divs[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            divs[i].style.display = '';
            count++;
        } else {
            divs[i].style.display = 'none';
        }
    }
    categoryDropdown.classList.add('show');

}


categorySearch.addEventListener('input', function() {
        filterFunction();
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#categorySearch')) {
        categoryDropdown.classList.remove('show');
    }else{
        categoryDropdown.classList.add('show');
    }
}








// variable declaration
let selectedCategory, selectedSubCategories, sellingPrice, costPrice, referalFeePercentageValue,
    closingFee, productGST;

let productVolume, volumetricWeight, productWeight;


function calculateResult() {
    console.log({selectedReferralPercentages})
    sellingPrice = Number(sellingP.value);
    costPrice = Number(costPriceId.value);
    productGST = Number(gst.value);
   /*
   * if (document.getElementById('isShippingExcluded').checked) { // if shipping excluded in selling price
        localCharge = Number(excludedshippingLocalId.value);
        regionalCharge = Number(excludedshippingRegionalId.value);
        nationalCharge = Number(excludedshippingNationalId.value);

        shippingCharge[0].innerHTML = localCharge;
        shippingCharge[1].innerHTML = regionalCharge;
        shippingCharge[2].innerHTML = nationalCharge;
    }
        */



    let range = Object.keys(selectedReferralPercentages) // getting range 
    for (let i = 0; i < range.length ; i++) {
        if (!Number(sellingPrice)) {
            alert("please enter selling price")
            return;
        }
        else if(range.length == 1){
            console.log({selectedReferralPercentages})
            referalFeePercentageValue = selectedReferralPercentages[range[0]]
        }
        else if (Number(sellingPrice) <= Number(range[i])) {
            console.log(sellingPrice, "<=", range[i]) // 
            console.log(selectedReferralPercentages[range[i]]); // value of range 
            referalFeePercentageValue = selectedReferralPercentages[range[i]]  // assigning value of range in this variable
            break;
        }
        else if (Number(sellingPrice) > Number(range[range.length - 2])) {
            console.log(sellingPrice, ">", range[range.length - 2]);
            referalFeePercentageValue = selectedReferralPercentages[range[range.length - 1]]
            console.log("out of range");
            break;
        }

    }

    document.getElementById('referal-percentage').innerHTML = "@ "+referalFeePercentageValue +"%";
    document.getElementById('referal-percentage').style.color = "red";

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
        // calculating volumetric weight in cm3
        let height = Number(heightId.value);
        let width = Number(widthId.value);
        let length = Number(lengthId.value);
        // productVolume = (height * width * length);
        volumetricWeight = (height * width * length) / 5
        if(volumetricWeight){
            document.getElementById('vol-weight-display').innerHTML = /*"vol weight " +*/ "@" + volumetricWeight +"g";
            document.getElementById('vol-weight-display').style.color = 'red'
        }
        // actual Weight in kg
        let weight = Number(weightId.value);
        let shipingWeight = volumetricWeight > weight ? volumetricWeight : weight;

        let shipping = {
            local: 41,
            regional: 55,
            national: 76
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

    payableTaxLocal = sellingTax; //+ gstOnACSChargesLocal + costPriceTax;
    payableTaxRegional = sellingTax; //+ gstOnACSChargesRegional + costPriceTax;
    payableTaxNational = sellingTax; //+ gstOnACSChargesNational + costPriceTax;

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
    console.log({ bankSettlementLocal, costPrice, payableTaxLocal, returnLossLocal })
    profitLocal = Math.round((bankSettlementLocal - costPrice - payableTaxLocal - returnLossLocal) * 100) / 100;
    profitRegional = Math.round((bankSettlementRegional - costPrice - payableTaxRegional - returnLossRegional) * 100) / 100;
    profitNational = Math.round((bankSettlementNational - costPrice - payableTaxNational - returnLossNational) * 100) / 100;

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
