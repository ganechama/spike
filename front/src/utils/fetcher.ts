const Fetcher = <T>(url: string): Promise<T> => {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP : ${res.status}`);
    }
    return res.json() as Promise<T>;
  });
};

export default Fetcher;