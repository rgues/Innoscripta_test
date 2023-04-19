

export function headers() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
    }
  }
}

export function authorizationHeader(token: string) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': `Bearer ${token}`
    }
  }
}