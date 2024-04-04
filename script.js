document.addEventListener('DOMContentLoaded', function() {
    const provinces = {
        'Sindh': ['Karachi', 'Hyderabad'],
        'Punjab': ['Lahore', 'Faisalabad'],
        'Khyber Pakhtunkhwa': ['Peshawar', 'Abbottabad'],
        'Balochistan': ['Quetta', 'Gwadar']
        // Isi tarah se aap aur provinces aur cities add kar sakte hain
    };

    const citiesSectors = {
        'Karachi': ['Defence (DHA)', 'Gulshan-e-Iqbal', 'Clifton'],
        'Lahore': ['Model Town', 'Bahria Town', 'Gulberg'],
        // Isi tarah se har city ke liye sectors add karen
    };

    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const sectorBlockAreaSelect = document.getElementById('sectorBlockArea');

    // Populate provinces dropdown
    for (const province in provinces) {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    }

    // Update cities dropdown based on selected province
    provinceSelect.addEventListener('change', function() {
        const selectedProvince = this.value;
        const cities = provinces[selectedProvince];

        citySelect.innerHTML = '<option value="">Select City</option>';
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        // Reset sectors/blocks/areas dropdown
        sectorBlockAreaSelect.innerHTML = '<option value="">Select Sector/Block/Area</option>';
    });

    // Update sectors/blocks/areas dropdown based on selected city
    citySelect.addEventListener('change', function() {
        const selectedCity = this.value;
        const sectors = citiesSectors[selectedCity] || [];

        sectorBlockAreaSelect.innerHTML = '<option value="">Select Sector/Block/Area</option>';
        sectors.forEach(sector => {
            const option = document.createElement('option');
            option.value = sector;
            option.textContent = sector;
            sectorBlockAreaSelect.appendChild(option);
        });
    });
});

document.getElementById('orderForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission

    // Form data handling logic here
    console.log("Form submitted with data:");
});

