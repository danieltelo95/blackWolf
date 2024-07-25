export const setUser = (user) => ({
    type: 'SET_USER',
    payload: {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
  },
  });
  
export const clearUser = () => ({
    type: 'CLEAR_USER',
  });

export const setCourses = (courses) => ({
    type: 'SET_COURSES',
    payload: courses,
  });

export const setDiscounts = (discounts) => ({
    type: 'SET_DISCOUNTS',
    payload: discounts,
  });
  
  
  