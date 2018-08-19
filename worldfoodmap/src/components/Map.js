import React, { Component } from "react"
import geographyObject from "../static/world-50m.json"
import GMap from './GMap'
import NewSearchBar from './NewSearchBar'




import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
}



class Map extends Component {
  constructor() {
    super()
    this.state = {
      city: null,
      center: [0,20],
      zoom: 1,
      cities: [
        { name: "Amsterdam", country:"Holland", coordinates: [4.54, 52.22] },
        { name: "Athens", country:"Greece", coordinates: [23.43, 37.58] },
        { name: "Barcelona", country:"Spain", coordinates: [2.11, 41.23] },
        { name: "Belfast", country:"Northern Ireland", coordinates: [-5.56, 54.36] },
        { name: "Belgrade", country:"Serbia", coordinates: [20.28, 44.94] },
        { name: "Berlin", country:"Germany", coordinates: [13.23, 52.31] },
        { name: "Bologna", country:"Italy", coordinates: [11.21, 44.30] },
        { name: "Bordeaux", country:"France", coordinates: [-0.35, 44.50] },
        { name: "Bratislava", country:"Slovakia", coordinates: [17.07, 48.09] },
        { name: "Brussels", country:"Belgium", coordinates: [4.21, 50.51] },
        { name: "Bucharest", country:"Romania", coordinates: [26.06, 44.26] },
        { name: "Budapest", country:"Hungary", coordinates: [19.03, 47.28] },
        { name: "Copenhagen", country:"Denmark", coordinates: [12.34, 55.41] },
        { name: "Dublin", country:"Ireland", coordinates: [-6.16, 53.21] },
        { name: "Florence", country:"Italy", coordinates: [11.15, 43.47] },
        { name: "Glasgow", country:"Scotland", coordinates: [-4.16, 55.51] },
        { name: "Helsinki", country:"Finland", coordinates: [24.56, 60.10] },
        { name: "Istanbul", country:"Turkey", coordinates: [28.57, 41.01] },
        { name: "Kaliningrad", country:"Russia", coordinates: [20.31, 54.43] },
        { name: "Kiev", country:"Ukraine", coordinates: [30.31, 50.27] },
        { name: "Lisbon", country:"Portugal", coordinates: [-9.08, 38.43] },
        { name: "London", country:"England", coordinates: [-0.08, 51.30] },
        { name: "Madrid", country:"Spain", coordinates: [-3.43, 40.23] },
        { name: "Minsk", country:"Belarus", coordinates: [27.34, 53.54] },
        { name: "Monaco", country:"Monaco", coordinates: [7.25, 43.44] },
        { name: "Moscow", country:"Russia", coordinates: [37.37, 55.45] },
        { name: "Munich", country:"Germany", coordinates: [11.34, 48.08] },        
        { name: "Naples", country:"Italy", coordinates: [14.16, 40.51] },
        { name: "Oslo", country:"Norway", coordinates: [10.45, 59.57] },
        { name: "Paris", country:"France", coordinates: [2.21, 48.51] },
        { name: "Prague", country:"Czech Republic", coordinates: [14.25, 50.05] },
        { name: "Pristina", country:"Kosovo", coordinates: [21.10, 42.40] },
        { name: "Reykjavík", country:"Iceland", coordinates: [-21.56, 64.08] },
        { name: "Rome", country:"Italy", coordinates: [12.30, 41.54] },
        { name: "Saint Petersburg", country:"Russia", coordinates: [30.18, 59.57] },
        { name: "Sarajevo", country:"Bosnia and Herzegovina", coordinates: [18.21, 43.51] },
        { name: "Seville", country:"Spain", coordinates: [-5.59, 37.23] },
        { name: "Sofia", country:"Bulgaria", coordinates: [23.20, 42.42] },
        { name: "Stockholm", country:"Sweden", coordinates: [18.04, 59.20] },
        { name: "Skopje", country:"Macedonia", coordinates: [21.26, 42.00] },
        { name: "Tirana", country: "Albania", coordinates: [19.49, 41.20] },
        { name: "Uppsala", country: "Sweden", coordinates: [17.39, 59.51] }, 
        { name: "Venice", country:"Italy", coordinates: [12.20, 45.26] },
        { name: "Vienna", country:"Austria", coordinates: [16.22, 48.13] },
        { name: "Warsaw", country:"Poland", coordinates: [21.01, 52.14] },
        { name: "Zagreb", country:"Croatia", coordinates: [15.59, 45.49] },
        { name: "Zurich", country: "Switzerland", coordinates: [8.5417,47.3769] },
        { name: "Abu Dhabi", country:"United Arab Emirates", coordinates: [54.22, 24.28] },
        { name: "Amman", country:"Jordan", coordinates: [35.56, 31.56] },
        { name: "Astana", country:"Kazakhstan", coordinates: [71.26, 51.10] },
        { name: "Ashgabat", country:"Turkmenistan", coordinates: [58.22, 37.56] },
        { name: "Balikpapan", country:"Indonesia", coordinates: [116.50, -1.16] },
        { name: "Bangalore", country:"India", coordinates: [77.34, 12.58] },
        { name: "Bangkok", country:"Thailand", coordinates: [100.28, 13.45] },
        { name: "Beijing", country:"China", coordinates: [116.23, 39.55] },
        { name: "Beirut", country:"Lebanon", coordinates: [35.31, 33.53] },
        { name: "Bishkek", country:"Kyrgyzstan", coordinates: [74.37, 42.52] },
        { name: "Busan", country:"South Korea", coordinates: [129.05, 35.11] },
        { name: "Cebu", country:"Philippines", coordinates: [123.54, 10.17] },
        { name: "Chengdu", country:"China", coordinates: [104.04, 30.40] },
        { name: "Chiang Mai", country:"Vietnam", coordinates: [99.00, 18.48] },
        { name: "Chongqing", country:"China", coordinates: [106.34, 29.34] },
        { name: "Colombo", country:"Sri Lanka", coordinates: [79.51, 6.56] },
        { name: "Da Nang", country:"Vietnam", coordinates: [108.14, 16.04] },
        { name: "Davao City", country:"Philippines", coordinates: [125.36, 7.04] },
        { name: "Dhaka", country:"Bangladesh", coordinates: [90.23, 23.42] }, 
        { name: "Doha", country:"Qatar", coordinates: [51.32, 25.17] },
        { name: "Dubai", country:"United Arab Emirates", coordinates: [55.18, 25.15] },
        { name: "Dushanbe", country:"Tajikistan", coordinates: [68.47, 38.32] },
        { name: "Guanzhou", country:"China", coordinates: [113.16, 23.08] },
        { name: "Hanoi", country:"Vietnam", coordinates: [105.51, 21.02] },
        { name: "Ho Chi Minh City", country:"Vietnam", coordinates: [106.41, 10.46] },
        { name: "Hong Kong", country:"China", coordinates: [114.10, 22.17] },
        { name: "Hyderabad", country:"India", coordinates: [78.29, 17.22] },
        { name: "Irkutsk", country:"Russia", coordinates: [104.18, 52.19] },
        { name: "Istanbul", country:"Turkey", coordinates: [28.57, 41.01] },
        { name: "Jaipur", country:"India", coordinates: [75.49, 26.56] },
        { name: "Jakarta", country:"Indonesia", coordinates: [106.48, -6.12] },
        { name: "Jerusalem", country:"Israel", coordinates: [35.13, 31.47] },
        { name: "Karachi", country:"Pakistan", coordinates: [67.01, 24.52] },
        { name: "Kabul", country:"Afghanistan", coordinates: [69.10, 34.32] },
        { name: "Kōbe", country:"Japan", coordinates: [135.12, 34.31] },
        { name: "Kuala Lumpur", country:"Malaysia", coordinates: [101.42, 3.09] },
        { name: "Kunming", country:"China", coordinates: [102.41, 25.04] },
        { name: "Kyoto", country:"Japan", coordinates: [135.46, 35.01] },
        { name: "Lhasa", country:"Tibet", coordinates: [91.06,29.39] },
        { name: "Macau", country:"China", coordinates: [113.33, 22.10] },
        { name: "Manila", country:"Philippines", coordinates: [120.58, 14.35] },
        { name: "Mecca", country:"Saudi Arabia", coordinates: [39.49, 21.25] },
        { name: "Mumbai", country:"India", coordinates: [72.50, 18.59] },
        { name: "Muscat", country:"Oman", coordinates: [58.36, 23.37] },
        { name: "Nagoya", country:"Japan", coordinates: [136.54, 35.11] },
        { name: "Nanjing", country:"China", coordinates: [118.46, 32.03] },
        { name: "Nanning", country:"China", coordinates: [108.19, 22.49] },
        { name: "Naypyidaw", country:"Myanmar", coordinates: [96.06, 19.45] },
        { name: "New Delhi", country:"India", coordinates: [77.13, 28.37] },
        { name: "Osaka", country:"Japan", coordinates: [135.30, 34.42] },
        { name: "Padang", country:"Indonesia", coordinates: [100.21, -0.57] },
        { name: "Pattaya", country:"Thailand", coordinates: [100.53, 12.56] },
        { name: "Peshawar", country:"Pakistan", coordinates: [71.35, 34.01] },
        { name: "Phnom Penh", country:"Cambodia", coordinates: [104.55, 11.33] },
        { name: "Phuket", country:"Thailand", coordinates: [98.24, 7.53] },
        { name: "Quezon City", country:"Philippines", coordinates: [121.02, 14.38] },
        { name: "Riyadh", country:"Saudi Arabia", coordinates: [46.43, 24.38] },
        { name: "Sapporo", country:"Japan", coordinates: [141.21, 43.04] },
        { name: "Seoul", country:"South Korea", coordinates: [126.59, 37.34] },
        { name: "Shanghai", country:"China", coordinates: [121.4737,31.2304] },
        { name: "Singapore", country:"Singapore", coordinates: [103.8198,1.3521] },
        { name: "Sochi", country:"Russia", coordinates: [39.43, 43.35] },
        { name: "Taipei", country: "Taiwan", coordinates: [121.38, 25.02] },
        { name: "Tashkent", country: "Uzbekistan", coordinates: [69.13, 41.16] },
        { name: "Tehran", country: "Iran", coordinates: [51.25, 35.42] },
        { name: "Tel Aviv", country: "Israel", coordinates: [34.47, 32.04] },
        { name: "Tianjin", country: "China", coordinates: [117.11, 39.08] },
        { name: "Tokyo", country: "Japan", coordinates: [139.42, 35.41] },
        { name: "Ulaanbaatar", country: "Mongolia", coordinates: [106.55, 47.55] }, 
        { name: "Vientiane", country:"Laos", coordinates: [102.36, 17.58] },
        { name: "Xi'an", country:"China", coordinates: [108.54, 34.16] },
        { name: "Yakutsk", country:"Russia", coordinates: [129.44, 62.02] },
        { name: "Yekaterinburg", country:"Russia", coordinates: [60.35, 56.50] },
        { name: "Yokohama", country:"Japan", coordinates: [139.38, 35.27] },
        { name: "Accra", country:"Ghana", coordinates: [-0.12, 5.33] },
        { name: "Addis Ababa", country:"Ethiopia", coordinates: [38.44, 9.02] },
        { name: "Algiers", country:"Algeria", coordinates: [3.13, 36.46] },
        { name: "Bamako", country:"Mali", coordinates: [-8.00, 12.39] },
        { name: "Bangui", country:"Central African Republic", coordinates: [18.35, 4.22] },
        { name: "Cairo", country:"Egypt", coordinates: [31.14, 30.03] },
        { name: "Cape Town", country:"South Africa", coordinates: [18.25, -33.56] },
        { name: "Casablanca", country:"Morocco", coordinates: [-7.35, 33.32] },
        { name: "Dakar", country:"Senegal", coordinates: [-17.27, 14.42] },
        { name: "Harare", country:"Zimbabwe", coordinates: [31.02, -17.52] },
        { name: "Johannesburg", country:"South Africa", coordinates: [28.03, -26.12] },
        { name: "Kampala", country:"Uganda", coordinates: [32.35, 0.19] },
        { name: "Kinshasa", country:"Democratic Republic of the Congo", coordinates: [15.19, -4.20] },
        { name: "Kumasi", country:"Ghana", coordinates: [-1.37, 6.40] },
        { name: "Lagos", country:"Nigeria", coordinates: [3.3792,6.5244] },
        { name: "Lusaka", country:"Zambia", coordinates: [28.17, -15.25] },
        { name: "N'Djamena", country:"Chad", coordinates: [15.03, 12.07] },
        { name: "Nairobi", country:"Kenya", coordinates: [36.49, -1.17] },
        { name: "Niamey", country:"Niger", coordinates: [2.06, 13.31] },
        { name: "Nouakchott", country:"Mauritania", coordinates: [-15.57, 18.06] },
        { name: "Pretoria", country:"South Africa", coordinates: [28.11, -25.45] },
        { name: "Windhoek", country:"Namibia", coordinates: [17.05, -22.34] },
        { name: "Adelaide", country:"Australia", coordinates: [138.36, -34.56] },
        { name: "Auckland", country:"New Zealand", coordinates: [174.44, -36.50] },
        { name: "Brisbane", country:"Australia", coordinates: [153.02, -27.28] },
        { name: "Gold Coast", country:"Australia", coordinates: [153.24, -28.01] },
        { name: "Melbourne", country:"Australia", coordinates: [144.58, -37.49] },
        { name: "Perth", country:"Australia", coordinates: [115.52, -31.57] },
        { name: "Port Moresby", country:"Papua New Guinea", coordinates: [147.13, -9.31] },
        { name: "Wellington", country:"New Zealand", coordinates: [174.47, -41.47] },
        { name: "Honolulu", country:"USA", coordinates: [-157.50, 21.19] },
        { name: "Sydney", country: "Australia", coordinates: [151.2093,-33.8688] },
        { name: "Albuquerque", country:"USA", coordinates: [-106.37, 35.07] },
        { name: "Anchorage", country:"USA", coordinates: [-149.54, 61.13] },
        { name: "Austin", country:"USA", coordinates: [-97.45, 30.15] },
        { name: "Bismarck", country:"USA", coordinates: [-100.47, 46.49] },
        { name: "Boise", country:"USA", coordinates: [-116.12, 43.37] },
        { name: "Buffalo", country:"USA", coordinates: [-78.51, 42.54] },
        { name: "Cabo San Lucas", country:"Mexico", coordinates: [-109.55, 22.53] },
        { name: "Calgary", country:"Canada", coordinates: [-114.04, 51.03] },
        { name: "Cancún", country:"Mexico", coordinates: [-86.51, 21.10] },
        { name: "Cheyenne", country:"USA", coordinates: [-104.48, 41.09] },
        { name: "Chicago", country:"USA", coordinates: [-87.38, 41.53] },
        { name: "Dallas", country:"USA", coordinates: [-96.48, 32.47] },
        { name: "Denver", country:"USA", coordinates: [-104.59, 39.44] },
        { name: "Detroit", country:"USA", coordinates: [-83.03, 42.20] },
        { name: "El Paso", country:"USA", coordinates: [-106.25, 31.47] },
        { name: "Fairbanks", country:"USA", coordinates: [-147.43, 64.51] },
        { name: "Guatemala City", country:"Guatemala", coordinates: [-90.32, 14.37] },
        { name: "Hartford", country:"USA", coordinates: [-72.40, 41.46] },
        { name: "Havana", country:"Cuba", coordinates: [-82.23, 23.08] },
        { name: "Houston", country:"USA", coordinates: [-95.23, 29.46] },
        { name: "Kansas City", country:"USA", coordinates: [-94.35, 39.06] },
        { name: "Kingston", country:"Jamaica", coordinates: [-76.48, 17.59] },
        { name: "Los Angeles", country:"USA", coordinates: [-118.15, 34.03] },
        { name: "Managua", country:"Nicaragua", coordinates: [-86.15, 12.08] },
        { name: "Memphis", country:"USA", coordinates: [-89.58, 35.07] },
        { name: "Mexico City", country:"Mexico", coordinates: [-99.08, 19.26] },
        { name: "Miami", country:"USA", coordinates: [-80.13, 25.47] },
        { name: "Minneapolis", country:"USA", coordinates: [-93.16, 44.59] },
        { name: "Monterrey", country:"Mexico", coordinates: [-100.18, 25.40] },
        { name: "Montreal", country:"Canada", coordinates: [-73.34, 45.30] },
        { name: "Nashville", country:"USA", coordinates: [-86.47, 36.10] },
        { name: "Nassau", country:"Bahamas", coordinates: [-77.20, 25.04] },
        { name: "New Orleans", country:"USA", coordinates: [-90.03, 29.58] },
        { name: "New York City", country:"USA", coordinates: [-73.56, 40.40] },
        { name: "Oklahoma City", country:"USA", coordinates: [-97.32, 35.29] },
        { name: "Panama City", country:"Panama", coordinates: [-79.31, 8.59] },
        { name: "Philadelphia", country:"USA", coordinates: [-75.10, 30.57] },
        { name: "Phoenix", country:"USA", coordinates: [-112.04, 33.27] },
        { name: "Pittsburgh", country:"USA", coordinates: [-80.00, 40.27] },
        { name: "Portland", country:"USA", coordinates: [-122.41, 45.31] },
        { name: "Puerto Vallarta", country:"Mexico", coordinates: [-105.16, 20.40] },
        { name: "Salt Lake City", country:"USA", coordinates: [-111.53, 40.45] },
        { name: "San Francisco", country:"USA", coordinates: [-122.4194,37.7749] },
        { name: "San Juan", country:"Puerto Rico", coordinates: [-66.04, 18.27] },
        { name: "Santa Fe", country:"USA", coordinates: [-105.58, 35.40] },
        { name: "Santo Domingo", country:"Dominican Republic", coordinates: [-69.57, 18.28] },
        { name: "Seattle", country:"USA", coordinates: [-122.20, 47.37] }, 
        { name: "St. Louis", country:"USA", coordinates: [-90.12, 38.38] },
        { name: "Tijuana", country: "Mexico", coordinates: [-117.02, 32.32] },
        { name: "Toronto", country: "Canada", coordinates: [-79.24, 43.42] },
        { name: "Vancouver", country:"Canada", coordinates: [-123.06, 49.15] },
        { name: "Washington DC", country:"USA", coordinates: [-77.02, 38.54] },
        { name: "Winnipeg", country:"Canada", coordinates: [-97.08, 49.54] },
        { name: "Belém", country:"Brazil", coordinates: [-48.30, -1.27] },
        { name: "Bogotá", country:"Colombia", coordinates: [-74.05, 4.36] },
        { name: "Brasília", country:"Brazil", coordinates: [-47.52, -15.48] },
        { name: "Buenos Aires", country:"Argentina", coordinates: [-58.3816,-34.6037] },
        { name: "Georgetown", country:"Guyana", coordinates: [-58.10, 6.48] },
        { name: "La Paz", country:"Bolivia", coordinates: [-68.09, -16.30] },
        { name: "Lima", country:"Peru", coordinates: [-77.02, -12.03] },
        { name: "Montevideo", country:"Uruguay", coordinates: [-56.11, -4.53] },
        { name: "Natal", country:"Brazil", coordinates: [-35.12, -5.47] },
        { name: "Porto Alegre", country:"Brazil", coordinates: [-51.14, -30.02] },
        { name: "Quito", country:"Ecuador", coordinates: [-78.35, -0.15] },
        { name: "Recife", country:"Brazil", coordinates: [-34.54, -8.03] },
        { name: "Rio de Janeiro", country:"Brazil", coordinates: [-43.12, -22.55] },
        { name: "Santiago", country:"Chile", coordinates: [-70.40, -33.27] },
        { name: "São Paulo", country:"Brazil", coordinates: [-46.38, -23.33] }
      ],
      citiesEurope: [
        { name: "Amsterdam", country:"Holland", coordinates: [4.54, 52.22] },
        { name: "Athens", country:"Greece", coordinates: [23.43, 37.58] },
        { name: "Barcelona", country:"Spain", coordinates: [2.11, 41.23] },
        { name: "Belfast", country:"Northern Ireland", coordinates: [-5.56, 54.36] },
        { name: "Belgrade", country:"Serbia", coordinates: [20.28, 44.94] },
        { name: "Berlin", country:"Germany", coordinates: [13.23, 52.31] },
        { name: "Bologna", country:"Italy", coordinates: [11.21, 44.30] },
        { name: "Bordeaux", country:"France", coordinates: [-0.35, 44.50] },
        { name: "Bratislava", country:"Slovakia", coordinates: [17.07, 48.09] },
        { name: "Brussels", country:"Belgium", coordinates: [4.21, 50.51] },
        { name: "Bucharest", country:"Romania", coordinates: [26.06, 44.26] },
        { name: "Budapest", country:"Hungary", coordinates: [19.03, 47.28] },
        { name: "Copenhagen", country:"Denmark", coordinates: [12.34, 55.41] },
        { name: "Dublin", country:"Ireland", coordinates: [-6.16, 53.21] },
        { name: "Florence", country:"Italy", coordinates: [11.15, 43.47] },
        { name: "Glasgow", country:"Scotland", coordinates: [-4.16, 55.51] },
        { name: "Helsinki", country:"Finland", coordinates: [24.56, 60.10] },
        { name: "Istanbul", country:"Turkey", coordinates: [28.57, 41.01] },
        { name: "Kaliningrad", country:"Russia", coordinates: [20.31, 54.43] },
        { name: "Kiev", country:"Ukraine", coordinates: [30.31, 50.27] },
        { name: "Lisbon", country:"Portugal", coordinates: [-9.08, 38.43] },
        { name: "London", country:"England", coordinates: [-0.08, 51.30] },
        { name: "Madrid", country:"Spain", coordinates: [-3.43, 40.23] },
        { name: "Minsk", country:"Belarus", coordinates: [27.34, 53.54] },
        { name: "Monaco", country:"Monaco", coordinates: [7.25, 43.44] },
        { name: "Moscow", country:"Russia", coordinates: [37.37, 55.45] },
        { name: "Munich", country:"Germany", coordinates: [11.34, 48.08] },        
        { name: "Naples", country:"Italy", coordinates: [14.16, 40.51] },
        { name: "Oslo", country:"Norway", coordinates: [10.45, 59.57] },
        { name: "Paris", country:"France", coordinates: [2.21, 48.51] },
        { name: "Prague", country:"Czech Republic", coordinates: [14.25, 50.05] },
        { name: "Pristina", country:"Kosovo", coordinates: [21.10, 42.40] },
        { name: "Reykjavík", country:"Iceland", coordinates: [-21.56, 64.08] },
        { name: "Rome", country:"Italy", coordinates: [12.30, 41.54] },
        { name: "Saint Petersburg", country:"Russia", coordinates: [30.18, 59.57] },
        { name: "Sarajevo", country:"Bosnia and Herzegovina", coordinates: [18.21, 43.51] },
        { name: "Seville", country:"Spain", coordinates: [-5.59, 37.23] },
        { name: "Sofia", country:"Bulgaria", coordinates: [23.20, 42.42] },
        { name: "Stockholm", country:"Sweden", coordinates: [18.04, 59.20] },
        { name: "Skopje", country:"Macedonia", coordinates: [21.26, 42.00] },
        { name: "Tirana", country: "Albania", coordinates: [19.49, 41.20] },
        { name: "Uppsala", country: "Sweden", coordinates: [17.39, 59.51] }, 
        { name: "Venice", country:"Italy", coordinates: [12.20, 45.26] },
        { name: "Vienna", country:"Austria", coordinates: [16.22, 48.13] },
        { name: "Warsaw", country:"Poland", coordinates: [21.01, 52.14] },
        { name: "Zagreb", country:"Croatia", coordinates: [15.59, 45.49] },
        { name: "Zurich", country: "Switzerland", coordinates: [8.5417,47.3769] }
      ],
      citiesAsia: [
        { name: "Abu Dhabi", country:"United Arab Emirates", coordinates: [54.22, 24.28] },
        { name: "Amman", country:"Jordan", coordinates: [35.56, 31.56] },
        { name: "Astana", country:"Kazakhstan", coordinates: [71.26, 51.10] },
        { name: "Ashgabat", country:"Turkmenistan", coordinates: [58.22, 37.56] },
        { name: "Balikpapan", country:"Indonesia", coordinates: [116.50, -1.16] },
        { name: "Bangalore", country:"India", coordinates: [77.34, 12.58] },
        { name: "Bangkok", country:"USA", coordinates: [100.28, 13.45] },
        { name: "Beijing", country:"China", coordinates: [116.23, 39.55] },
        { name: "Beirut", country:"Lebanon", coordinates: [35.31, 33.53] },
        { name: "Bishkek", country:"Kyrgyzstan", coordinates: [74.37, 42.52] },
        { name: "Busan", country:"South Korea", coordinates: [129.05, 35.11] },
        { name: "Cebu", country:"Philippines", coordinates: [123.54, 10.17] },
        { name: "Chengdu", country:"China", coordinates: [104.04, 30.40] },
        { name: "Chiang Mai", country:"Vietnam", coordinates: [99.00, 18.48] },
        { name: "Chongqing", country:"China", coordinates: [106.34, 29.34] },
        { name: "Colombo", country:"Sri Lanka", coordinates: [79.51, 6.56] },
        { name: "Da Nang", country:"Vietnam", coordinates: [108.14, 16.04] },
        { name: "Davao City", country:"Philippines", coordinates: [125.36, 7.04] },
        { name: "Dhaka", country:"Bangladesh", coordinates: [90.23, 23.42] }, 
        { name: "Doha", country:"Qatar", coordinates: [51.32, 25.17] },
        { name: "Dubai", country:"United Arab Emirates", coordinates: [55.18, 25.15] },
        { name: "Dushanbe", country:"Tajikistan", coordinates: [68.47, 38.32] },
        { name: "Guanzhou", country:"China", coordinates: [113.16, 23.08] },
        { name: "Hanoi", country:"Vietnam", coordinates: [105.51, 21.02] },
        { name: "Ho Chi Minh City", country:"Vietnam", coordinates: [106.41, 10.46] },
        { name: "Hong Kong", country:"China", coordinates: [114.10, 22.17] },
        { name: "Hyderabad", country:"India", coordinates: [78.29, 17.22] },
        { name: "Irkutsk", country:"Russia", coordinates: [104.18, 52.19] },
        { name: "Istanbul", country:"Turkey", coordinates: [28.57, 41.01] },
        { name: "Jaipur", country:"India", coordinates: [75.49, 26.56] },
        { name: "Jakarta", country:"Indonesia", coordinates: [106.48, -6.12] },
        { name: "Jerusalem", country:"Israel", coordinates: [35.13, 31.47] },
        { name: "Karachi", country:"Pakistan", coordinates: [67.01, 24.52] },
        { name: "Kabul", country:"Afghanistan", coordinates: [69.10, 34.32] },
        { name: "Kōbe", country:"Japan", coordinates: [135.12, 34.31] },
        { name: "Kuala Lumpur", country:"Malaysia", coordinates: [101.42, 3.09] },
        { name: "Kunming", country:"China", coordinates: [102.41, 25.04] },
        { name: "Kyoto", country:"Japan", coordinates: [135.46, 35.01] },
        { name: "Lhasa", country:"Tibet", coordinates: [91.06,29.39] },
        { name: "Macau", country:"China", coordinates: [113.33, 22.10] },
        { name: "Manila", country:"Philippines", coordinates: [120.58, 14.35] },
        { name: "Mecca", country:"Saudi Arabia", coordinates: [39.49, 21.25] },
        { name: "Mumbai", country:"India", coordinates: [72.50, 18.59] },
        { name: "Muscat", country:"Oman", coordinates: [58.36, 23.37] },
        { name: "Nagoya", country:"Japan", coordinates: [136.54, 35.11] },
        { name: "Nanjing", country:"China", coordinates: [118.46, 32.03] },
        { name: "Nanning", country:"China", coordinates: [108.19, 22.49] },
        { name: "Naypyidaw", country:"Myanmar", coordinates: [96.06, 19.45] },
        { name: "New Delhi", country:"India", coordinates: [77.13, 28.37] },
        { name: "Osaka", country:"Japan", coordinates: [135.30, 34.42] },
        { name: "Padang", country:"Indonesia", coordinates: [100.21, -0.57] },
        { name: "Pattaya", country:"Thailand", coordinates: [100.53, 12.56] },
        { name: "Peshawar", country:"Pakistan", coordinates: [71.35, 34.01] },
        { name: "Phnom Penh", country:"Cambodia", coordinates: [104.55, 11.33] },
        { name: "Phuket", country:"Thailand", coordinates: [98.24, 7.53] },
        { name: "Quezon City", country:"Philippines", coordinates: [121.02, 14.38] },
        { name: "Riyadh", country:"Saudi Arabia", coordinates: [46.43, 24.38] },
        { name: "Sapporo", country:"Japan", coordinates: [141.21, 43.04] },
        { name: "Seoul", country:"South Korea", coordinates: [126.59, 37.34] },
        { name: "Shanghai", country:"China", coordinates: [121.4737,31.2304] },
        { name: "Singapore", country:"Singapore", coordinates: [103.8198,1.3521] },
        { name: "Sochi", country:"Russia", coordinates: [39.43, 43.35] },
        { name: "Taipei", country: "Taiwan", coordinates: [121.38, 25.02] },
        { name: "Tashkent", country: "Uzbekistan", coordinates: [69.13, 41.16] },
        { name: "Tehran", country: "Iran", coordinates: [51.25, 35.42] },
        { name: "Tel Aviv", country: "Israel", coordinates: [34.47, 32.04] },
        { name: "Tianjin", country: "China", coordinates: [117.11, 39.08] },
        { name: "Tokyo", country: "Japan", coordinates: [139.42, 35.41] },
        { name: "Ulaanbaatar", country: "Mongolia", coordinates: [106.55, 47.55] }, 
        { name: "Vientiane", country:"Laos", coordinates: [102.36, 17.58] },
        { name: "Xi'an", country:"China", coordinates: [108.54, 34.16] },
        { name: "Yakutsk", country:"Russia", coordinates: [129.44, 62.02] },
        { name: "Yekaterinburg", country:"Russia", coordinates: [60.35, 56.50] },
        { name: "Yokohama", country:"Japan", coordinates: [139.38, 35.27] }
      ],
      citiesAfrica: [
        { name: "Accra", country:"Ghana", coordinates: [-0.12, 5.33] },
        { name: "Addis Ababa", country:"Ethiopia", coordinates: [38.44, 9.02] },
        { name: "Algiers", country:"Algeria", coordinates: [3.13, 36.46] },
        { name: "Bamako", country:"Mali", coordinates: [-8.00, 12.39] },
        { name: "Bangui", country:"Central African Republic", coordinates: [18.35, 4.22] },
        { name: "Cairo", country:"Egypt", coordinates: [31.14, 30.03] },
        { name: "Cape Town", country:"South Africa", coordinates: [18.25, -33.56] },
        { name: "Casablanca", country:"Morocco", coordinates: [-7.35, 33.32] },
        { name: "Dakar", country:"Senegal", coordinates: [-17.27, 14.42] },
        { name: "Harare", country:"Zimbabwe", coordinates: [31.02, -17.52] },
        { name: "Johannesburg", country:"South Africa", coordinates: [28.03, -26.12] },
        { name: "Kampala", country:"Uganda", coordinates: [32.35, 0.19] },
        { name: "Kinshasa", country:"Democratic Republic of the Congo", coordinates: [15.19, -4.20] },
        { name: "Kumasi", country:"Ghana", coordinates: [-1.37, 6.40] },
        { name: "Lagos", country:"Nigeria", coordinates: [3.3792,6.5244] },
        { name: "Lusaka", country:"Zambia", coordinates: [28.17, -15.25] },
        { name: "N'Djamena", country:"Chad", coordinates: [15.03, 12.07] },
        { name: "Nairobi", country:"Kenya", coordinates: [36.49, -1.17] },
        { name: "Niamey", country:"Niger", coordinates: [2.06, 13.31] },
        { name: "Nouakchott", country:"Mauritania", coordinates: [-15.57, 18.06] },
        { name: "Pretoria", country:"South Africa", coordinates: [28.11, -25.45] },
        { name: "Windhoek", country:"Namibia", coordinates: [17.05, -22.34] }
      ],
      citiesOceania: [ 
        { name: "Adelaide", country:"Australia", coordinates: [138.36, -34.56] },
        { name: "Auckland", country:"New Zealand", coordinates: [174.44, -36.50] },
        { name: "Brisbane", country:"Australia", coordinates: [153.02, -27.28] },
        { name: "Gold Coast", country:"Australia", coordinates: [153.24, -28.01] },
        { name: "Melbourne", country:"Australia", coordinates: [144.58, -37.49] },
        { name: "Perth", country:"Australia", coordinates: [115.52, -31.57] },
        { name: "Port Moresby", country:"Papua New Guinea", coordinates: [147.13, -9.31] },
        { name: "Wellington", country:"New Zealand", coordinates: [174.47, -41.47] },
        { name: "Honolulu", country:"USA", coordinates: [-157.50, 21.19] },
        { name: "Sydney", country: "Australia", coordinates: [151.2093,-33.8688] }
      ],
      citiesNorthAmerica: [
        { name: "Albuquerque", country:"USA", coordinates: [-106.37, 35.07] },
        { name: "Anchorage", country:"USA", coordinates: [-149.54, 61.13] },
        { name: "Austin", country:"USA", coordinates: [-97.45, 30.15] },
        { name: "Bismarck", country:"USA", coordinates: [-100.47, 46.49] },
        { name: "Boise", country:"USA", coordinates: [-116.12, 43.37] },
        { name: "Buffalo", country:"USA", coordinates: [-78.51, 42.54] },
        { name: "Cabo San Lucas", country:"Mexico", coordinates: [-109.55, 22.53] },
        { name: "Calgary", country:"Canada", coordinates: [-114.04, 51.03] },
        { name: "Cancún", country:"Mexico", coordinates: [-86.51, 21.10] },
        { name: "Cheyenne", country:"USA", coordinates: [-104.48, 41.09] },
        { name: "Chicago", country:"USA", coordinates: [-87.38, 41.53] },
        { name: "Dallas", country:"USA", coordinates: [-96.48, 32.47] },
        { name: "Denver", country:"USA", coordinates: [-104.59, 39.44] },
        { name: "Detroit", country:"USA", coordinates: [-83.03, 42.20] },
        { name: "El Paso", country:"USA", coordinates: [-106.25, 31.47] },
        { name: "Fairbanks", country:"USA", coordinates: [-147.43, 64.51] },
        { name: "Guatemala City", country:"Guatemala", coordinates: [-90.32, 14.37] },
        { name: "Hartford", country:"USA", coordinates: [-72.40, 41.46] },
        { name: "Havana", country:"Cuba", coordinates: [-82.23, 23.08] },
        { name: "Houston", country:"USA", coordinates: [-95.23, 29.46] },
        { name: "Kansas City", country:"USA", coordinates: [-94.35, 39.06] },
        { name: "Kingston", country:"Jamaica", coordinates: [-76.48, 17.59] },
        { name: "Los Angeles", country:"USA", coordinates: [-118.15, 34.03] },
        { name: "Managua", country:"Nicaragua", coordinates: [-86.15, 12.08] },
        { name: "Memphis", country:"USA", coordinates: [-89.58, 35.07] },
        { name: "Mexico City", country:"Mexico", coordinates: [-99.08, 19.26] },
        { name: "Miami", country:"USA", coordinates: [-80.13, 25.47] },
        { name: "Minneapolis", country:"USA", coordinates: [-93.16, 44.59] },
        { name: "Monterrey", country:"Mexico", coordinates: [-100.18, 25.40] },
        { name: "Montreal", country:"Canada", coordinates: [-73.34, 45.30] },
        { name: "Nashville", country:"USA", coordinates: [-86.47, 36.10] },
        { name: "Nassau", country:"Bahamas", coordinates: [-77.20, 25.04] },
        { name: "New Orleans", country:"USA", coordinates: [-90.03, 29.58] },
        { name: "New York City", country:"USA", coordinates: [-73.56, 40.40] },
        { name: "Oklahoma City", country:"USA", coordinates: [-97.32, 35.29] },
        { name: "Panama City", country:"Panama", coordinates: [-79.31, 8.59] },
        { name: "Philadelphia", country:"USA", coordinates: [-75.10, 30.57] },
        { name: "Phoenix", country:"USA", coordinates: [-112.04, 33.27] },
        { name: "Pittsburgh", country:"USA", coordinates: [-80.00, 40.27] },
        { name: "Portland", country:"USA", coordinates: [-122.41, 45.31] },
        { name: "Puerto Vallarta", country:"Mexico", coordinates: [-105.16, 20.40] },
        { name: "Salt Lake City", country:"USA", coordinates: [-111.53, 40.45] },
        { name: "San Francisco", country:"USA", coordinates: [-122.4194,37.7749] },
        { name: "San Juan", country:"Puerto Rico", coordinates: [-66.04, 18.27] },
        { name: "Santa Fe", country:"USA", coordinates: [-105.58, 35.40] },
        { name: "Santo Domingo", country:"Dominican Republic", coordinates: [-69.57, 18.28] },
        { name: "Seattle", country:"USA", coordinates: [-122.20, 47.37] }, 
        { name: "St. Louis", country:"USA", coordinates: [-90.12, 38.38] },
        { name: "Tijuana", country: "Mexico", coordinates: [-117.02, 32.32] },
        { name: "Toronto", country: "Canada", coordinates: [-79.24, 43.42] },
        { name: "Vancouver", country:"Canada", coordinates: [-123.06, 49.15] },
        { name: "Washington DC", country:"USA", coordinates: [-77.02, 38.54] },
        { name: "Winnipeg", country:"Canada", coordinates: [-97.08, 49.54] }
      ],
      citiesSouthAmerica: [
        { name: "Belém", country:"Brazil", coordinates: [-48.30, -1.27] },
        { name: "Bogotá", country:"Colombia", coordinates: [-74.05, 4.36] },
        { name: "Brasília", country:"Brazil", coordinates: [-47.52, -15.48] },
        { name: "Buenos Aires", country:"Argentina", coordinates: [-58.3816,-34.6037] },
        { name: "Georgetown", country:"Guyana", coordinates: [-58.10, 6.48] },
        { name: "La Paz", country:"Bolivia", coordinates: [-68.09, -16.30] },
        { name: "Lima", country:"Peru", coordinates: [-77.02, -12.03] },
        { name: "Montevideo", country:"Uruguay", coordinates: [-56.11, -4.53] },
        { name: "Natal", country:"Brazil", coordinates: [-35.12, -5.47] },
        { name: "Porto Alegre", country:"Brazil", coordinates: [-51.14, -30.02] },
        { name: "Quito", country:"Ecuador", coordinates: [-78.35, -0.15] },
        { name: "Recife", country:"Brazil", coordinates: [-34.54, -8.03] },
        { name: "Rio de Janeiro", country:"Brazil", coordinates: [-43.12, -22.55] },
        { name: "Santiago", country:"Chile", coordinates: [-70.40, -33.27] },
        { name: "São Paulo", country:"Brazil", coordinates: [-46.38, -23.33] }
      ]
    }
    
  
    this.handleAfricaSelection = this.handleAfricaSelection.bind(this)
    this.handleAsiaSelection = this.handleAsiaSelection.bind(this)
    this.handleEuropeSelection = this.handleEuropeSelection.bind(this)
    this.handleNorthAmericaSelection = this.handleNorthAmericaSelection.bind(this)
    this.handleSouthAmericaSelection = this.handleSouthAmericaSelection.bind(this)
    this.handleOceaniaSelection = this.handleOceaniaSelection.bind(this)
    this.handleMarkerSelection = this.handleMarkerSelection.bind(this)
    this.handleReset = this.handleReset.bind(this)

  
}





handleCitySelection = (cityName) => {
    let theCity = this.state.cities.filter((city) => {
        return city.name === cityName
    })
    this.setState({
      center: theCity[0].coordinates,
      zoom: 5,
      city: theCity[0]
    })
    console.log(theCity)
    this.props.renderVideos(theCity[0].name, theCity[0].country)
    this.props.renderWiki(theCity[0].name, theCity[0].country)
  }

handleAfricaSelection(evt) {
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.citiesAfrica[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 5,
      city: city
    })
    this.props.renderVideos(city.name, city.country)
    this.props.renderWiki(city.name, city.country)
  }

handleAsiaSelection(evt) {
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.citiesAsia[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 5,
      city: city
    })
    this.props.renderVideos(city.name, city.country)
    this.props.renderWiki(city.name, city.country)
  }

handleEuropeSelection(evt) {
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.citiesEurope[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 5,
      city: city
    })
    this.props.renderVideos(city.name, city.country)
    this.props.renderWiki(city.name, city.country)
  }

handleNorthAmericaSelection(evt) {
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.citiesNorthAmerica[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 5,
      city: city
    })
    this.props.renderVideos(city.name, city.country)
    this.props.renderWiki(city.name, city.country)
  }

handleSouthAmericaSelection(evt) {
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.citiesSouthAmerica[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 5,
      city: city
    })
    this.props.renderVideos(city.name, city.country)
    this.props.renderWiki(city.name, city.country)
  }

handleOceaniaSelection(evt) {
    const cityId = evt.target.getAttribute("data-city")
    const city = this.state.citiesOceania[cityId]
    this.setState({
      center: city.coordinates,
      zoom: 5,
      city: city
    })
    this.props.renderVideos(city.name, city.country)
    this.props.renderWiki(city.name, city.country)
  }

handleMarkerSelection(evt) {
    this.setState({
      center: evt.coordinates,
      zoom: 5,
      city: evt
    })
    this.props.renderVideos(evt.name, evt.country)
    this.props.renderWiki(evt.name, evt.country)
  }


handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
      city: null
    })
    this.props.removeVideos()
    this.props.resetCity()
  }




  render() {


   if (!this.state.city){
    return (
       <div className="Map">
       <h4 style={{color: "white"}}> To Get Started: </h4>
      <div className='dropdownMenus'>
        <div>
       <NewSearchBar handleCitySelection={this.handleCitySelection} cities={this.state.cities}/>
       </div>
       <h4 style={{color: "white"}}>Choose a City from the Dropdown Menus</h4>
        <div>
                <div className="dropdown">
                    <button className="dropbtn">Africa</button>
                    <div className="dropdown-content">        
          {
            this.state.citiesAfrica.map((city, i) => (

                <p key={i} data-city={i}onClick={this.handleAfricaSelection}>{city.name}, {city.country}</p>

            ))
          }
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Asia</button>
                <div className="dropdown-content">        
      {
        this.state.citiesAsia.map((city, i) => (

            <p key={i} data-city={i}onClick={this.handleAsiaSelection}>{city.name}, {city.country}</p>

        ))
      }
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Europe</button>
                <div className="dropdown-content">        
      {
        this.state.citiesEurope.map((city, i) => (

            <p key={i} data-city={i}onClick={this.handleEuropeSelection}>{city.name}, {city.country}</p>

        ))
      }
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">North America</button>
                <div className="dropdown-content">        
      {
        this.state.citiesNorthAmerica.map((city, i) => (

            <p key={i} data-city={i}onClick={this.handleNorthAmericaSelection}>{city.name}, {city.country}</p>

        ))
      }
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">South America</button>
                <div className="dropdown-content">        
      {
        this.state.citiesSouthAmerica.map((city, i) => (

            <p key={i} data-city={i}onClick={this.handleSouthAmericaSelection}>{city.name}, {city.country}</p>

        ))
      }
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Oceania</button>
                <div className="dropdown-content">        
      {
        this.state.citiesOceania.map((city, i) => (

            <p key={i} data-city={i}onClick={this.handleOceaniaSelection}>{city.name}, {city.country}</p>

        ))
      }
                </div>
            </div>            
        </div>
        </div>
        <div style={wrapperStyles}>
        <h4 style={{color: "white"}}> Or Click on a Map Marker </h4>
          <ComposableMap
            className="ComposableMap"
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: "100%",
              height: "auto",

            }}
            >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography={geographyObject}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))} 
              </Geographies>
              <Markers>
                {
                  this.state.cities.map((city, i) => (
                    <Marker key={i} onClick={this.handleMarkerSelection} data-city={i} marker={city}>
                      <circle
                        cx={0}
                        cy={0}
                        r={4}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    <text 
                    className="text"
                    textAnchor="middle"
                    y={0}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                    }}
                    >
                    {city.name}
                  </text>
                    </Marker>
                  ))
                }
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    )

} else {
   if(!this.props.cityStats) {
    return null

   }else {
   const stats= this.props.cityStats.slice(3)
  return (
      <div className="Map">

        <a>
          <button className="goBack" onClick={this.handleReset}>
            { "Go Back" }
          </button>
        </a>
        <h1 style={{color: "white"}}> {this.state.city.name}, {this.state.city.country}</h1>
        <h3 style={{textAlign:"center"}}> <a href= {stats} target="_blank" style={{color: "white"}}>  Wikipedia </a></h3>
        <br></br>
        <div >
        <div style= {{margin: "0 auto"}}>
          <ComposableMap
            className="ComposableMap"
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: "50%",
              overflow: "hidden",
              height: "auto",
              float: "left"
            }}
            >
            <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
              <Geographies geography={geographyObject}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: "#ECEFF1",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#607D8B",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",

                      },
                      pressed: {
                        fill: "#FF5722",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}

                  />
                ))} 
              </Geographies>
              <Markers>
                {
          
                 this.state.cities.map((city, i) => (
                    <Marker key={i} name={city.name} onClick={this.handleMarkerSelection} data-city={i} marker={city}>

                      <circle
                        cx={0}
                        cy={0}
                        r={5}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                      <text 
                    className="text"
                    textAnchor="middle"
                    y={0}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                    }}
                    >
                    {city.name}
                  </text>
                    </Marker>
                    ))
                }
              </Markers>
              <Markers>
                {
                     <Marker data-city={this.state.city.name} marker={this.state.city}>
                    
                      <circle
                        cx={0}
                        cy={0}
                        r={10}
                        fill="green"
                      /> 
                    </Marker>
                  }
              </Markers>
                
            </ZoomableGroup>
          
          </ComposableMap>
        </div>
        </div>
        <GMap city={this.state.city} />
      </div>
    )
}




  }

}





}

export default Map