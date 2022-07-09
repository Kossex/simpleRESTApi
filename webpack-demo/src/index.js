import put from '../../modules/put.js';
import GetAndPost from '../../modules/GetAndPost.js';
import GetInfo from '../../modules/GetInfo.js';
import DeleteAndDeleteAll from '../../modules/DeleteAndDeleteAll.js';
document.addEventListener('DOMContentLoaded',()=>{
    GetAndPost();
    put();
    GetInfo();
    DeleteAndDeleteAll();
});