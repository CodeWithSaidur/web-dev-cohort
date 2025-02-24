function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users/1") 
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); 
        })
        .then(user => console.log("User Data:", user)) 
        .catch(error => console.log("Error fetching user data:", error)) 
        .finally(() => console.log("Fetch operation completed")); 
}

fetchUserData();
