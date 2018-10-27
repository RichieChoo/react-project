import request from '@/utils/request';

export async function getItem() {
    return request(`api/cats/lv2/statistics`,{
        method:'GET',
    });
}


