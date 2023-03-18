

import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);



// const jsonData = 
//      [
//       {
//         "title": "Green Monster Smoothie",
//         "method": "Blend together 1 cup spinach, 1/2 banana, 1/2 cup unsweetened almond milk, 1/2 cup plain Greek yogurt, 1 tbsp honey, and 1 cup ice until smooth. Add more almond milk as needed for desired consistency.",
//         "rating": 4
//       },
//       {
//         "title": "Blueberry Banana Smoothie",
//         "method": "Blend together 1 banana, 1/2 cup blueberries, 1/2 cup vanilla Greek yogurt, 1/2 cup milk, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 5
//       },
//       {
//         "title": "Strawberry Mango Smoothie",
//         "method": "Blend together 1 mango, 1/2 cup strawberries, 1/2 cup plain Greek yogurt, 1/2 cup orange juice, and 1 cup ice until smooth.",
//         "rating": 4
//       },
//       {
//         "title": "Peanut Butter Banana Smoothie",
//         "method": "Blend together 1 banana, 1/2 cup unsweetened almond milk, 1/2 cup plain Greek yogurt, 2 tbsp peanut butter, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 4
//       },
//       {
//         "title": "Tropical Green Smoothie",
//         "method": "Blend together 1 cup kale, 1 banana, 1/2 cup frozen pineapple, 1/2 cup coconut water, 1/4 cup Greek yogurt, and 1 tbsp honey until smooth.",
//         "rating": 4
//       },
//       {
//         "title": "Chocolate Peanut Butter Smoothie",
//         "method": "Blend together 1 banana, 1/2 cup unsweetened almond milk, 2 tbsp cocoa powder, 2 tbsp peanut butter, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 5
//       },
//       {
//         "title": "Mixed Berry Smoothie",
//         "method": "Blend together 1 banana, 1/2 cup mixed berries (strawberries, blueberries, raspberries), 1/2 cup vanilla Greek yogurt, 1/2 cup milk, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 4
//       },
//       {
//         "title": "Chocolate Banana Smoothie",
//         "method": "Blend together 1 banana, 1/2 cup unsweetened almond milk, 2 tbsp cocoa powder, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 4
//       },
//       {
//         "title": "Cinnamon Apple Smoothie",
//         "method": "Blend together 1 apple, 1/2 cup unsweetened almond milk, 1/2 cup plain Greek yogurt, 1/4 tsp cinnamon, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 3
//       },
//       {
//         "title": "Mint Chocolate Chip Smoothie",
//         "method": "Blend together 1 banana, 1/2 cup unsweetened almond milk, 1/4 tsp peppermint extract, 2 tbsp chocolate chips, 1 tbsp honey, and 1 cup ice until smooth.",
//         "rating": 4
//       }
//   ]
  

// async function sendJsonToSupabase() {
//   const { data, error } = await supabase
//     .from('smoothies')
//     .insert(jsonData)
  
//   if (error) {
//     console.error(error)
//   } else {
//     console.log('JSON data inserted successfully')
//   }
// }

// sendJsonToSupabase()