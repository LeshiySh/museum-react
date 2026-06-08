export async function getPaintings() {
    try {
        const response = await fetch('https://registry.scalar.com/@mail-ufgwz/apis/gallery-api@1.0', {
            headers: { 'Accept': 'application/json' }
        });

        const spec = await response.json();
        const paintings = spec.paths['/paintings'].get.responses['200'].content['application/json'].example;

        return paintings || [];
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return [];
    }
}