// script.js
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('subcategory-input');
    const dropdownList = document.getElementById('subcategory-list');
    const referralInfo = document.getElementById('referral-info');

    const options = {
        "Media": [
            {
                "School Textbook Bundles": {
                    "referralPercentage": {
                        "250": 2.0,
                        "1000": 3.0,
                        "1500": 4.0,
                        "maxPercentage": 4.5
                    }
                }
            },
            {
                "Books": {
                    "referralPercentage": {
                        "250": 3.0,
                        "500": 4.5,
                        "1000": 9.0,
                        "maxPercentage": 13.5
                    }
                }
            },
            // More subcategories...
        ],
        // More categories...
    };

    let allSubcategories = [];
    for (let category in options) {
        for (let subcategory of options[category]) {
            allSubcategories.push(...Object.keys(subcategory));
        }
    }
    console.log(allSubcategories)

    function filterOptions(searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return allSubcategories.filter(option => option.toLowerCase().includes(lowerCaseSearchTerm));
    }

    function updateDropdown(filteredOptions) {
        dropdownList.innerHTML = '';
        filteredOptions.forEach(option => {
            const div = document.createElement('div');
            div.textContent = option;
            div.addEventListener('click', () => {
                input.value = option;
                dropdownList.style.display = 'none';
                displayReferralInfo(option);
            });
            dropdownList.appendChild(div);
        });
        dropdownList.style.display = filteredOptions.length ? 'block' : 'none';
    }

    function displayReferralInfo(subcategory) {
        referralInfo.innerHTML = '';
        for (let category in options) {
            for (let subcatObj of options[category]) {
                if (subcatObj[subcategory]) {
                    const referralData = subcatObj[subcategory].referralPercentage;
                    for (let key in referralData) {
                        const p = document.createElement('p');
                        p.textContent = `${key}: ${referralData[key]}`;
                        referralInfo.appendChild(p);
                    }
                    referralInfo.style.display = 'block';
                    return;
                }
            }
        }
    }

    input.addEventListener('input', () => {
        const searchTerm = input.value;
        const filteredOptions = filterOptions(searchTerm);
        updateDropdown(filteredOptions);
    });

    document.addEventListener('click', (e) => {
        if (!dropdownList.contains(e.target) && !input.contains(e.target)) {
            dropdownList.style.display = 'none';
        }
    });

    // Initial population of subcategory dropdown
    updateDropdown(allSubcategories);
});
