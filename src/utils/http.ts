import axios, { type AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 20 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true

// 添加请求拦截    url携带时间t
axios.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {

        config.params = {
            ...config.params,
            t: Date.now(),
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截
axios.interceptors.response.use(
    (reponse) => {
        return reponse
    },
    function (error) {
        return Promise.reject(error);
    }
)

interface Http {
    get<T>(url: string, params?: unknown): Promise<T>;

    post<T>(url: string, params?: unknown): Promise<T>;

    upload<T>(url: string, params: unknown): Promise<T>;

    put<T>(url: string, params: unknown): Promise<T>;

    delete<T>(url: string, params: unknown): Promise<T>;

    download(url: string): void;
}

const http: Http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {params})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    post(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    put(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .put(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    delete(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .delete(url, {params})
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    upload(url, file) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, file, {
                    headers: {"Content-Type": "multipart/form-data"},
                })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },

    download(url) {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = url;
        iframe.onload = function () {
            document.body.removeChild(iframe);
        };

        document.body.appendChild(iframe);
    },
};

export default http;