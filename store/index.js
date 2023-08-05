export const state = () => ({
    blogPosts: [],
    projects: []
});

export const mutations = {
    setBlogPosts(state, list) {
        state.blogPosts = list;
    },
    setProjects(state, list) {
        state.projects = list;
    }
};

export const actions = {
    async nuxtServerInit({commit}) {
        let files = await require.context(
            "~/assets/content/blog/",
            false,
            /\.json$/
        );
        let blogPosts = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit("setBlogPosts", blogPosts);

        let projectFiles = await require.context(
            "~/assets/content/projects/",
            false,
            /\.json$/
        );

        let projects = projectFiles.keys().map(key => {
            let res = projectFiles(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit("setProjects", projects);
    }
};