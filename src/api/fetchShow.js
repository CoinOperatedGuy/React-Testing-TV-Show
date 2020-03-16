import axios from 'axios';

export const fetchShow = () => {
    return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
}; 

    