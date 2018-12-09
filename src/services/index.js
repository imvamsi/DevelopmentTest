const apiService = {
    fetchTeamList(){
        const path = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team';
        return fetch(path)
            .then(res => res.json())
            .then(json => json)
            .catch(error => error);
    },

    fetchTeamMembers(id){
        const path = `http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${id}`;
        return fetch(path)
            .then(res => res.json())
            .then(json => json)
            .catch(error => error);
    },

    fetchUsers(){
        const path = 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user';
        return fetch(path)
            .then(res => res.json())
            .then(json => json)
            .catch(error => error);
    }
}

export default apiService;