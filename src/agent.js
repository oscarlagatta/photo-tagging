/**
 * uses the superagent npm module to make http requests.
 * all versions of superagent don't support promise properly therefore
 * we use the superagent-promise package.
 * 
 */

import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);

/**
 * Every api request starts with a specific url address so 
 * we can call that the API_ROOT.
 */
const API_ROOT = 'https://conduit.productionready.io/api';

/**
 * For eacth HTTP request we are only concerned with the Response Body
 * so we create a function that takes the response and returns the Body.
 */
const responseBody = res => res.body;

/**
 * Quick wrapper around get requests
 */
const requests = {
    get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
    all: page => requetes.get('/articles?limit=10')
};

export default {
    Articles
}