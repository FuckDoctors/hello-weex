import streamHelper from '@/utils/streamHelper';

// export const reverseGeo = (latitude, longitude) => {
//   // https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=36.672652&longitude=117.133606
//   const url = 'https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=36.672652&longitude=117.133606';

//   return streamHelper.fetch({
//     method: 'GET',
//     url,
//     type: 'json',
//   });
// };

export default {
  reverseGeo(latitude, longitude) {
    // https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=36.672652&longitude=117.133606
    const url = `https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=${latitude}&longitude=${longitude}`;
    // const url = `http://cangdu.org:8001/v2/pois/${latitude},${longitude}`;
    // const url = `/api/bgs/poi/reverse_geo_coding?latitude=${latitude}&longitude=${longitude}`;
    return streamHelper.fetch({
      method: 'GET',
      url,
      type: 'json',
    });
  },
};
