/* Profile Object */
const myProfile = {
    name: "Nelson Attah",
    photo: "../images/pix.jpg",
    favoriteFoods: ["Fish soup", "beans and garri", "rice with stew"],
    hobbies: ["reading", "singing", "exercising"],
    placesLived: []
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push({ place: "FCT Abuja", length: "5 years" });
  myProfile.placesLived.push({ place: "Port Harcort", length: "3 years" });
  myProfile.placesLived.push({ place: "Umuahia", length: "2 years" });
  // Add more places lived as needed
  
  /* DOM Manipulation - Output */
  document.getElementById("name").textContent = myProfile.name;
  document.getElementById("photo").src = myProfile.photo;
  document.getElementById("photo").alt = myProfile.name;
  
  /* Favorite Foods List */
  const favoriteFoodsList = document.getElementById("favorite-foods");
  myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });
  
  /* Hobbies List */
  const hobbiesList = document.getElementById("hobbies");
  myProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
  
  /* Places Lived DataList */
  const placesLivedDL = document.getElementById("places-lived");
  myProfile.placesLived.forEach(place => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
  
    const dd = document.createElement("dd");
    dd.textContent = place.length;
  
    placesLivedDL.appendChild(dt);
    placesLivedDL.appendChild(dd);
  });
  