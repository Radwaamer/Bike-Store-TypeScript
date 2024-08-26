export type TProduct= {
    id: string
    name: string
    category: string
    "Engine Capacity": string
    Mileage: string
    "Fuel Tank Capacity": string
    Gears: string
    Brakes: string
    "Starting Mechanism": string
    "Wheel Type": string
    "Body Type": string
    description: string
    "cover image": string
    "small image": string
    price: Price
    colors: Color[]
    images: string[]
    reviews: Review[]
    "expert review": ExpertReview
    prices: Price2[]
  }
  
  export interface Price {
    start: string
    end: string
  }
  
  export interface Color {
    name: string
    color: string
    image: string
    availability: boolean
  }
  
  export interface Review {
    name: string
    date: string
    rate: string
    title: string
    comment: string
  }
  
  export interface ExpertReview {
    rating: Rating
    pros: string[]
    cons: string[]
    verdict: string
    description: string
  }

  export interface Rating {
    design: number
    Safety: number
    Comfort: number
    Performance: number
    Significance: number
    "Value For Money": number
    "Fuel Consumption": number
  }
  
  export interface Price2 {
    city: string
    price: string
  }