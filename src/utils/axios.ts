import axios from 'axios';

declare global {
  interface Window {
    _env_: {
      VITE_APP_BACKEND_BASEURL: string;
    };
  }
}

const axiosInstance = axios.create({
  baseURL: window._env_.VITE_APP_BACKEND_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function Backend(path: string) {
  // return import.meta.env.VITE_APP_BACKEND_BASEURL + path;
  return window._env_.VITE_APP_BACKEND_BASEURL + path;
}

export async function downloadFile(fileUrl: string, filename: string) {
  await axiosInstance
    .get(fileUrl, { responseType: 'blob' })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch((error) => {
      return error;
    });

  return;
}

export default axiosInstance;
