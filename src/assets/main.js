const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US';

const content = null || document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e9fe3b1844msh5aac0c2a82372c1p160ba7jsne2cab5bda066',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumnail.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
        </div>
    </div>
        `).slice(0,4).join('')}

        `;
    } catch {

    }
})();