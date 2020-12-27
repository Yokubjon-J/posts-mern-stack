export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
            return posts.map((post)=>post.id === action.payload ? action.payload : post);
        case 'CREATE': 
            return [...posts, action.payload];
        case 'UPDATE': 
            return ;
        default:
            return posts;
    }
}