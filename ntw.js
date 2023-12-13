function numberToWords(number) {
  if (number === 0) return "Zero";

  var units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  var teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  var tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertToWords(n) {
    if (n < 10) return units[n];
    if (n < 20) return teens[n - 11];
    var unit = n % 10 !== 0 ? " " + units[n % 10] : "";
    return tens[Math.floor(n / 10)] + unit;
  }

  //   function convertChunkToWords(chunk, chunkIndex) {
  //     if (chunk === 0) return "";
  //     var chunkWords = "";
  //     var thousandAdded = false;

  //     if (chunkIndex > 1 && chunk > 0) {
  //       if (!thousandAdded) {
  //         chunkWords += " Thousand ";
  //         thousandAdded = true;
  //       }
  //       // Add decimal point and convert remaining digits
  //       chunkWords += ". " + convertToWords(Math.floor(chunk * 100) % 100);
  //     } else if (chunkIndex > 0 && chunk > 0 && !thousandAdded) {
  //       // Add "Thousand" only when not added before
  //       chunkWords += " Thousand ";
  //       thousandAdded = true;
  //     }

  //     if (chunk >= 1000) {
  //       chunkWords += units[Math.floor(chunk / 1000)] + " Thousand ";
  //       thousandAdded = true;
  //       chunk %= 1000;
  //     }

  //     if (chunk >= 1000) {
  //       chunkWords += units[Math.floor(chunk / 1000)] + " Million ";
  //       thousandAdded = true;
  //       chunk %= 1000;
  //     }

  //     if (chunk >= 1000) {
  //       chunkWords += units[Math.floor(chunk / 1000)] + " Billion ";
  //       thousandAdded = true;
  //       chunk %= 1000;
  //     }

  //     if (chunk >= 1000) {
  //       chunkWords += units[Math.floor(chunk / 1000)] + " Trillion ";
  //       thousandAdded = true;
  //       chunk %= 1000;
  //     }

  //     if (chunk >= 100) {
  //       chunkWords += units[Math.floor(chunk / 100)] + " Hundred";
  //       chunk %= 100;
  //       if (chunk > 0) chunkWords += " ";
  //     }
  //     if (chunk > 0) {
  //       chunkWords += convertToWords(chunk);
  //     }
  //     if (chunk >= 1000 && chunkIndex > 0) {
  //       if (!thousandAdded) {
  //         chunkWords += units[Math.floor(chunk / 1000)] + " Thousand ";
  //         thousandAdded = true;
  //       }
  //       chunk %= 1000;
  //     }
  //     if (chunk >= 1000 && chunkIndex > 0) {
  //       // Add "Thousand" only if not the first chunk and not already added
  //       if (chunkIndex > 1 || !thousandAdded) {
  //         chunkWords += units[Math.floor(chunk / 1000)] + " Thousand ";
  //         thousandAdded = true;
  //       }
  //       chunk %= 1000;
  //     }

  //     if (chunkIndex > 1 && chunk > 0) {
  //       if (!thousandAdded) {
  //         chunkWords += " Thousand ";
  //         thousandAdded = true;
  //       }
  //       // Add decimal point and convert remaining digits
  //       chunkWords += ". " + convertToWords(Math.floor(chunk * 100) % 100);
  //     } else if (chunkIndex > 0 && chunk > 0) {
  //       if (!thousandAdded) {
  //         chunkWords += " Thousand ";
  //         thousandAdded = true;
  //       }
  //     }
  //     thousandAdded = false; // Reset flag after each chunk
  //     return (
  //       chunkWords +
  //       (chunkIndex > 0
  //         ? " Thousand Million Billion Trillion".split(" ")[chunkIndex] + " "
  //         : "")
  //     );
  //   }

  function convertChunkToWords(chunk, chunkIndex) {
    if (chunk === 0) return "";

    let chunkWords = "";
    let thousandAdded = false;

    // Handle decimal portion for non-first chunks
    if (chunkIndex > 1 && chunk > 0) {
      if (!thousandAdded) {
        chunkWords += " Thousand ";
        thousandAdded = true;
      }
      chunkWords += ". " + convertToWords(Math.floor(chunk * 100) % 100);
    }

    // Convert hundreds, tens, and units
    if (chunk >= 100) {
      chunkWords += units[Math.floor(chunk / 100)] + " Hundred";
      chunk %= 100;
      if (chunk > 0) chunkWords += " ";
    }
    if (chunk > 0) {
      chunkWords += convertToWords(chunk);
    }

    // Handle larger magnitudes and "Thousand" addition for non-first chunks
    for (const magnitude of ["Thousand", "Million", "Billion", "Trillion"]) {
      const magnitudeIndex = magnitudes.indexOf(magnitude);
      if (chunk >= 1000 && chunkIndex > magnitudeIndex) {
        if (!thousandAdded) {
          chunkWords += ` ${units[Math.floor(chunk / 1000)]} ${magnitude} `;
          thousandAdded = true;
        }
        chunk %= 1000;
      }
    }

    // Add appropriate magnitude suffix
    return chunkWords + (chunkIndex > 0 ? " " + magnitudes[chunkIndex] + " " : "");
  }

  var numberString = number.toString();
  var chunks = [];
  while (numberString.length > 0) {
    chunks.unshift(Number(numberString.slice(-3)));
    numberString = numberString.slice(0, -3);
  }

  var result = chunks.map(convertChunkToWords).join("").trim();

  return result.charAt(0).toUpperCase() + result.slice(1);
}

console.log(numberToWords(31264)); // Output: ThirtyOne Thousand Two Hundred SixtyFour
console.log(numberToWords(123456789.123)); // Output: One Hundred TwentyThree Million Four Hundred FiftySix Thousand Seven Hundred EightyNine Point One Two Three
