document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.product-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent.trim();
      displaySubOptions(category);
    });
  });

  function displaySubOptions(category) {
    const subOptionsContainer = document.getElementById('sub-options');
    subOptionsContainer.innerHTML = `<h3>Loading ${category} options...</h3>`;

    setTimeout(() => {
      const sampleSubOptions = {
        "Washing Machines": ["Top Load", "Front Load"],
        "Refrigerators": ["Single Door", "Double Door", "Side-by-Side"],
        "Microwaves": ["Solo", "Grill", "Convection"],
        "Air Conditioners": ["Split AC", "Window AC"],
        "Televisions": ["LED", "OLED", "QLED"]
      };

      const options = sampleSubOptions[category] || ["No options available"];
      const listItems = options.map(item => `<li>${item}</li>`).join("");
      subOptionsContainer.innerHTML = `<h3>${category} options:</h3><ul>${listItems}</ul>`;
    }, 500);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.product-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent.trim();
      displaySubOptions(category);
    });
  });

  function displaySubOptions(category) {
    const subOptionsContainer = document.getElementById('sub-options');
    subOptionsContainer.innerHTML = `<h3>Loading ${category} options...</h3>`;

    setTimeout(() => {
      const sampleProducts = {
        "Washing Machines": {
          "Top Load": ["Ion SpinMaster 6.5kg", "Ion WashNova 7kg", "Ion SwiftCycle 8kg"],
          "Front Load": ["Ion TurboJet 7kg", "Ion ZenDrum 6.5kg", "Ion SteamAura 8.5kg"]
        },
        "Refrigerators": {
          "Single Door": ["Ion FreshLine 190L","Ion EcoChill 205L","Ion MiniVault 180L"],
          "Double Door": ["Ion ArcticVault 423L","Ion TwinCool 308L","Ion NovaFreeze 650L"],
          "Side-by-Side": ["Ion GrandVault 653L","Ion GlacierEdge 596L","Ion QuantumChill 679L"]
        },
        "Microwaves": {
          "Solo": ["Ion QuickHeat 20L"],
          "Grill": ["Ion TurboWave 30L"],
          "Convection": ["Ion ChefPro 28L", "Ion BakeMaster 25L"]
        },
        "Air Conditioners": {
          "Split AC": ["Ion GlacierEdge 1.8","Ion SmartAir ","Ion ArcticFlow Dual Fan"],
          "Window AC": ["Ion BreezeBox","Ion ChillSquare 1.5","Ion EcoWindow 1.2","Ion FrostFrame"]
        },
        "Televisions": {
          "LED": ["Ion ViewEdge 4K HDR", "Ion ZenFrame Smart TV"],
          "OLED": ["Ion QuantumDisplay OLED"],
          "QLED": ["Ion SonicWall 65” Ultra HD"]
        }
      };

      const subOptions = sampleProducts[category] || {};
      let html = `<h3>${category} options:</h3>`;
      for (const [subCat, products] of Object.entries(subOptions)) {
        const productList = products.map(product => `<li>${product}</li>`).join("");
        html += `<h4>${subCat}</h4><ul>${productList}</ul>`;
      }

      subOptionsContainer.innerHTML = html;
    }, 500);
  }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent =
    "Thanks! We'll get back to you shortly.";
});
