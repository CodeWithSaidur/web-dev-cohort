class ApiClient {
  constructor() {
    this.baseURL = 'https://localhost:3000/api/v1';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const headers = {
        ...this.defaultHeaders,
        ...options.headers,
      };

      const response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include', // for sending cookies (auth/session)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'API request failed',
        );
      }

      return await response.json();
    } catch (error) {
      console.log('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints

  async signup(name, email, password) {
    return this.customFetch('/user/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.customFetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getProfile() {
    return this.customFetch('/user/me');
  }
}

const apiClient = new ApiClient(); // creation singalong

export default apiClient;
