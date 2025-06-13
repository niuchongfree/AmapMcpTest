document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成');
    // 可以添加动态加载饭店数据的功能，比如从API获取
    const restaurantList = document.querySelector('.restaurant-list');
    // 示例数据
    const restaurants = [
        { name: '饭店1', rating: '4.8', address: '地址1' },
        { name: '饭店2', rating: '4.7', address: '地址2' },
        { name: '饭店3', rating: '4.6', address: '地址3' }
    ];
    // 动态生成列表项
    restaurants.forEach(restaurant => {
        const item = document.createElement('div');
        item.className = 'restaurant-item';
        item.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>评分：${restaurant.rating}</p>
            <p>地址：${restaurant.address}</p>
        `;
        restaurantList.appendChild(item);
    });
});