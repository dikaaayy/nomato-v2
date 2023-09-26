import CryptoJS from "crypto-js";

// export const ratingCounter = (rating: any) => {
//   let finalRating: number = 0;
//   rating.forEach((rate: any) => {
//     finalRating += rate.rate;
//   });
//   return Number(finalRating / rating.length).toFixed(1);
// };

// export function openTimeLogic(openingHoursObject: any) {
//   if (!openingHoursObject) return "Unavailable";

//   if (openingHoursObject.periods.length === 1 && openingHoursObject.periods[0].open.time === "0000") {
//     return "Open 24 Hour";
//   }

//   const now = new Date();
//   const currentDay = now.getDay();
//   const currentTime = `${now.getHours()}${now.getMinutes().toString().padStart(2, "0")}`;

//   let isOpen = false;

//   openingHoursObject.periods.forEach((period: any) => {
//     const openDay = period.open.day;
//     const closeDay = period.close.day;
//     const openTime = period.open.time;
//     const closeTime = period.close.time;

//     if ((currentDay === openDay && currentTime >= openTime) || (currentDay === closeDay && currentTime <= closeTime) || (currentDay > openDay && currentDay < closeDay)) {
//       isOpen = true;
//     }
//   });

//   if (isOpen) {
//     return "Open Now";
//   } else {
//     return "Closed";
//   }
// }

export function openTimeLogic(openingHours: any) {
  if (!openingHours) return "Unavailable";
  if (openingHours === "24") return "Open 24 Hour";
  const now = new Date();
  const [openStr, closeStr] = openingHours.split("\u2009–\u2009"); // Use unicode characters for the whitespace

  const [openHour, openMinute] = openStr.split(":").map(Number);
  let [closeHour, closeMinute] = closeStr.split(":").map(Number);

  if (closeHour < openHour || (closeHour === openHour && closeMinute < openMinute)) {
    closeHour += 24; // Convert closing time to next day if it's before opening time
  }

  const openTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), openHour, openMinute);
  let closeTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), closeHour, closeMinute);

  // return "Open Now" if current time is between openTime and closeTime;
  if (now >= openTime && now <= closeTime) {
    return "Open Now";
  } else {
    return "Closed";
  }
}

export const priceLogic = (priceRange: String) => {
  // const array = priceRange.split("/");
  // return `Rp${Number(array[0]).toLocaleString("de-DE")} for two`;
  return `Rp${priceRange} for two`;
};

export const truncate = (str: String, n: number) => {
  return str?.length > n ? str.substr(0, n - 1) + ".." : str;
};

export const featureLogic = (feature: String) => {
  const splitString = feature.split(/(?=[A-Z])/);
  // splitString.forEach((item: any) => {
  //   item.charAt(0).toUpperCase() + item.slice(1);
  // });
  let name: String = "";
  for (let i = 0; i < splitString.length; i++) {
    // console.log(splitString[i]);
    name += splitString[i];
    name += " ";
  }
  return name;
};

export const recentRestaurantHandler = (restaurant: any) => {
  const initialList = JSON.parse(decryptLocalStorage("recentSearchRestaurant") || "[]");
  if (!initialList.some((item: any) => item.name === restaurant.gofood_name)) {
    const recent = [restaurant, ...initialList];
    localStorage.setItem("recentSearchRestaurant", encryptLocalStorage(JSON.stringify(recent)));
  } else {
    const filtered = initialList.filter((item: any) => item.gofood_name !== restaurant.gofood_name);
    const recent = [restaurant, ...filtered];
    localStorage.setItem("recentSearchRestaurant", encryptLocalStorage(JSON.stringify(recent)));
  }
};

export function getMultipleRandom(arr: any[], num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const reduced = shuffled.slice(0, num);

  return reduced;
}

export const decryptLocalStorage = (key: string) => {
  const encrypted = localStorage.getItem(key);
  const value = CryptoJS.AES.decrypt(String(encrypted), process.env.NEXT_PUBLIC_SECRET!).toString(CryptoJS.enc.Utf8);
  return value;
};

export const encryptLocalStorage = (key: string) => {
  return CryptoJS.AES.encrypt(key, process.env.NEXT_PUBLIC_SECRET!).toString();
};

export function getRandomElementsFromArray(array: any, count: any) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
}

export function translateToK(number: number) {
  if (number >= 1000 && number < 1000000) {
    const thousands = Math.floor(number / 1000);
    return thousands + "K+";
  }

  // Handle cases where the number is outside the specified range
  return String(number);
}

export function translatePriceRange(number: number) {
  if (!number) return "$";
  const symbols = ["$", "$$", "$$$"];
  return symbols[number - 1];
}

export function translateOpeningHours(data: any) {
  if (!data) return [];
  const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const output = daysOfWeek.map((day) => {
    const timeRange = data[day].split(" – ");
    const openTime = timeRange[0];
    const closeTime = timeRange[1];

    return {
      day: day,
      open_time: openTime,
      close_time: closeTime,
    };
  });

  return output;
}

export function getCloseTimeForToday(openingHours: any) {
  // const now = new Date();
  // const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

  // const todayOpeningHours = openingHours.find((item: any) => item.day === currentDay);

  // if (todayOpeningHours) {
  //   return todayOpeningHours.closeTime;
  // }

  return "Closed today";
}

export function getTodaysOpeningHours(schedule: any) {
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const today = new Date().getDay(); // Get the current day (0 for Sunday, 1 for Monday, etc.)
  const todayName = daysOfWeek[today]; // Get the day name from the array

  return schedule[todayName];
}
