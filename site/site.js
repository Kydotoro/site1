document.addEventListener('DOMContentLoaded', () => {
    // Ініціалізація масивів для категорій
    let categories = {
        pots: [],
        pans: [],
        plates: []
    };

    // Прив'язка подій до зображень
    document.getElementById('pots-img').addEventListener('click', () => addItem('pots'));
    document.getElementById('pans-img').addEventListener('click', () => addItem('pans'));
    document.getElementById('plates-img').addEventListener('click', () => addItem('plates'));

    // Прив'язка подій до кнопок очищення
    document.getElementById('clear-pots').addEventListener('click', () => clearCategory('pots'));
    document.getElementById('clear-pans').addEventListener('click', () => clearCategory('pans'));
    document.getElementById('clear-plates').addEventListener('click', () => clearCategory('plates'));
    document.getElementById('clear-all').addEventListener('click', clearAll);

    // Прив'язка подій до кнопок показу
    document.getElementById('show-pots').addEventListener('click', () => showCategory('pots'));
    document.getElementById('show-pans').addEventListener('click', () => showCategory('pans'));
    document.getElementById('show-plates').addEventListener('click', () => showCategory('plates'));
    document.getElementById('show-all').addEventListener('click', showAll);

    // Прив'язка події до пошуку
    document.getElementById('search-input').addEventListener('keyup', searchItems);

    // Функція додавання товару
    function addItem(category) {
        let item = prompt(`Введіть товар для категорії ${translateCategory(category)}:`);
        if (item) {
            categories[category].push(item);
            alert(`Товар "${item}" додано до ${translateCategory(category)}`);
        }
    }

    // Функція очищення категорії
    function clearCategory(category) {
        categories[category] = [];
        displayOutput(`Категорію ${translateCategory(category)} очищено!`);
    }

    // Функція очищення всіх категорій
    function clearAll() {
        categories.pots = [];
        categories.pans = [];
        categories.plates = [];
        displayOutput('Усі категорії очищено!');
    }

    // Функція показу однієї категорії
    function showCategory(category) {
        let items = categories[category].join(', ') || 'Порожньо';
        displayOutput(`<h3>${translateCategory(category)}</h3><p>${items}</p>`);
    }

    // Функція показу всіх категорій
    function showAll() {
        let output = '';
        for (let category in categories) {
            let items = categories[category].join(', ') || 'Порожньо';
            output += `<h3>${translateCategory(category)}</h3><p>${items}</p>`;
        }
        displayOutput(output);
    }

    // Функція пошуку
    function searchItems() {
        let query = document.getElementById('search-input').value.toLowerCase();
        let results = '';
        
        for (let category in categories) {
            let found = categories[category].filter(item => item.toLowerCase().includes(query));
            if (found.length > 0) {
                results += `<h3>${translateCategory(category)}</h3><p>${found.join(', ')}</p>`;
            }
        }
        
        displayOutput(results || 'Нічого не знайдено');
    }

    // Допоміжна функція для відображення результатів
    function displayOutput(content) {
        document.getElementById('output').innerHTML = content;
    }

    // Переклад назв категорій
    function translateCategory(category) {
        const translations = {
            pots: 'Каструлі',
            pans: 'Сковорідки',
            plates: 'Тарілки'
        };
        return translations[category];
    }
});