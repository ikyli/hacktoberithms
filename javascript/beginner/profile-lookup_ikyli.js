var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function look_up_profile(name, info) {
  contacts.forEach(function(contacts) {
    if (name == contacts.firstName) {
      if (info == "lastName".toLowerCase) {
        return console.log(contacts.lastName);
      }
      if (info == "number".toLowerCase) {
        return console.log(contacts.number);
      }
      if (info == "likes".toLowerCase) {
        return console.log(contacts.likes);
      }
    } else {
      console.log("No contact founded");
    }
  });
}

look_up_profile("Akira", "likes");
