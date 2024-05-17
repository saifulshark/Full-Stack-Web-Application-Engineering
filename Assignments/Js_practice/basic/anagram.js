// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
    // Helper function to clean and sort a string
    const cleanAndSort = (str) => {
      return str
        .replace(/[^\w]/g, '')//here all non alphabetic value get eliminated  // Remove all non-alphanumeric characters
        // .toLowerCase()        // Convert to lowercase or uppercase
        .toUpperCase()//convert cases
        .split('')             //split means break it at all part by part  // Split into array of characters
        .sort()                 // Sort the array
        .join('');              // Join back into a string
    };
  
    // Clean and sort both strings
    const cleanedStr1 = cleanAndSort(str1);
    const cleanedStr2 = cleanAndSort(str2);
  
    // Compare the cleaned and sorted strings
    return cleanedStr1 === cleanedStr2;
  }
  
  // Export the function
  module.exports = isAnagram;
  
  // Example usage
  const str1 = "lis@ten";
  const str2 = "silen&t";
  const result = isAnagram(str1, str2);
  console.log(`Are "${str1}" and "${str2}" anagrams?`, result);  // Output: Are "listen" and "silent" anagrams? true
  
  const str3 = "hello";
  const str4 = "world";
  const result2 = isAnagram(str3, str4);
  console.log(`Are "${str3}" and "${str4}" anagrams?`, result2);  // Output: Are "hello" and "world" anagrams? false
  
