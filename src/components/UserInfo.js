// import Loading from "./Loading";

const UserInfo = ({ data, loading, error }) => {
    return ( 
        <>
        {/* {loading && <Loading />}
        {error && <div>{ error }</div>} */}
                {data && (
                <section className="user-container">
                    <h1>{data.login}</h1>
                    <h1>{data.name}</h1>
                    <div>{data.blog}</div>
                    <img className="card_avatar" src={data.avatar_url} alt='Profile' />
                </section>
            )}
        </>
     );
}
 
export default UserInfo;

// avatar_url: "https://avatars.githubusercontent.com/u/86486259?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2021-06-25T16:12:07Z"
// email: null
// events_url: "https://api.github.com/users/andreiursan23/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/andreiursan23/followers"
// following: 2
// following_url: "https://api.github.com/users/andreiursan23/following{/other_user}"
// gists_url: "https://api.github.com/users/andreiursan23/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/andreiursan23"
// id: 86486259
// location: null
// login: "andreiursan23"
// name: null
// node_id: "MDQ6VXNlcjg2NDg2MjU5"
// organizations_url: "https://api.github.com/users/andreiursan23/orgs"
// public_gists: 0
// public_repos: 19
// received_events_url: "https://api.github.com/users/andreiursan23/received_events"
// repos_url: "https://api.github.com/users/andreiursan23/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/andreiursan23/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/andreiursan23/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2022-01-11T16:19:01Z"
// url: "https://api.github.com/users/andreiursan23"