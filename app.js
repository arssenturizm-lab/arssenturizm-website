// Tours Data
const tours = [
    {
        id: 1,
        name: "İstanbul Turu",
        description: "Tarihi medeniyetlerin buluştuğu İstanbul'u keşfedin. Topkapı Sarayı, Ayasofya ve daha fazlası.",
        price: "₺2,500",
        duration: "3 Gün",
        image: "https://images.unsplash.com/photo-1541432901042-2d8dd34c6d20?w=400&h=300"
    },
    {
        id: 2,
        name: "Kapadokya Turu",
        description: "Peri bacaları ve balonlarla ünlü Kapadokya'nın harikalarını deneyimleyin.",
        price: "₺3,000",
        duration: "4 Gün",
        image: "https://images.unsplash.com/photo-1565008576549-bdab6f6db810?w=400&h=300"
    },
    {
        id: 3,
        name: "Pamukkale Turu",
        description: "Beyaz travertinleriyle efsanevi Pamukkale'yi ziyaret edin ve termal suları deneyimleyin.",
        price: "₺2,200",
        duration: "2 Gün",
        image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&h=300"
    },
    {
        id: 4,
        name: "Ege Kıyıları Turu",
        description: "Bodrum, Marmaris ve Dalyan'ın güzel kıyılarında unutulmaz anılar yaratın.",
        price: "₺2,800",
        duration: "5 Gün",
        image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&h=300"
    },
    {
        id: 5,
        name: "Akdeniz Turu",
        description: "Antalya, Side ve Alanya'nın kristal berrak sularında rahatlama ve macera.",
        price: "₺3,200",
        duration: "4 Gün",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300"
    },
    {
        id: 6,
        name: "Kültür Turu",
        description: "Efes, Pergamon ve Troia gibi antik şehirleri keşfedin ve tarihle buluşun.",
        price: "₺2,900",
        duration: "3 Gün",
        image: "https://images.unsplash.com/photo-1599085810694-e5b5f2a0073c?w=400&h=300"
    }
];

// Gallery Images
const galleryImages = [
    "https://images.unsplash.com/photo-1578922746875-e46167e34213?w=400&h=300",
    "https://images.unsplash.com/photo-1541432901042-2d8dd34c6d20?w=400&h=300",
    "https://images.unsplash.com/photo-1565008576549-bdab6f6db810?w=400&h=300",
    "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&h=300",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300",
    "https://images.unsplash.com/photo-1599085810694-e5b5f2a0073c?w=400&h=300"
];

// Load Tours
document.addEventListener('DOMContentLoaded', function() {
    loadTours();
    loadGallery();
    setupEventListeners();
});

function loadTours() {
    const toursGrid = document.getElementById('toursGrid');
    toursGrid.innerHTML = tours.map(tour => `
        <div class="tour-card">
            <img src="${tour.image}" alt="${tour.name}">
            <div class="tour-info">
                <h3>${tour.name}</h3>
                <p>${tour.description}</p>
                <div class="tour-price">${tour.price}</div>
                <p style="font-size: 0.9rem; color: #999;">Süre: ${tour.duration}</p>
                <button class="btn btn-primary" onclick="selectTour('${tour.name}', '${tour.price}')">Rezervasyon Yap</button>
            </div>
        </div>
    `).join('');
}

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = galleryImages.map(img => `
        <div class="gallery-item">
            <img src="${img}" alt="Gallery">
        </div>
    `).join('');
}

function setupEventListeners() {
    // Auth Modal
    const authBtn = document.querySelector('.auth-btn');
    const authModal = document.getElementById('authModal');
    const closeBtn = document.querySelector('.close');

    authBtn.onclick = () => authModal.style.display = 'block';
    closeBtn.onclick = () => authModal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == authModal) authModal.style.display = 'none';
    };

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            alert('Mesajınız başarıyla gönderildi! Yakında sizinle iletişime geçeceğiz.');
            contactForm.reset();
        };
    }

    // Explore Button
    const exploreBtn = document.querySelector('.btn-primary');
    if (exploreBtn) {
        exploreBtn.onclick = () => {
            document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
        };
    }
}

function selectTour(tourName, price) {
    alert(`${tourName} için rezervasyon işlemine gidiliyor...\nFiyat: ${price}`);
}

// Instagram Link Opening
document.addEventListener('click', (e) => {
    if (e.target.closest('.instagram-link')) {
        window.open('https://instagram.com/arssenseyhat', '_blank');
    }
});