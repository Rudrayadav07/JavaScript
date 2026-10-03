let button = document.querySelector(".btn");
let input = document.querySelector(".inp");


// ===============================
// GET PROFILE DATA
// ===============================

function getProfileData(username) {

    return fetch(`https://api.github.com/users/${username}`)
        .then(raw => {

            if (!raw.ok) {
                throw new Error("User not found");
            }

            return raw.json();

        });

}


// ===============================
// GET REPOSITORIES
// ===============================

function getTopRepos(username) {

    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(raw => {

            if (!raw.ok) {
                throw new Error("User repos not found");
            }

            return raw.json();

        });

}


// ===============================
// FILL PROFILE
// ===============================

function fillProfile(details, repos) {

    let data = `

        <!-- PROFILE -->

        <section>

            <div
                class="max-w-5xl mx-auto
                       px-5 sm:px-8
                       py-12 sm:py-16"
            >

                <!-- PROFILE HEADER -->

                <div
                    class="flex flex-col
                           sm:flex-row
                           gap-6"
                >

                    <!-- Avatar -->

                    <img
                        src="${details.avatar_url}"
                        alt="${details.name || details.login}"
                        class="w-20 h-20
                               sm:w-24 sm:h-24
                               rounded-full
                               border border-[#292e34]
                               object-cover"
                    />


                    <!-- Profile Info -->

                    <div class="min-w-0">

                        <h1
                            class="text-2xl sm:text-3xl
                                   font-medium
                                   tracking-[-0.04em]"
                        >
                            ${details.name || details.login}
                        </h1>


                        <p
                            class="mt-1
                                   text-sm
                                   text-[#747b83]"
                        >
                            @${details.login}
                        </p>


                        <p
                            class="mt-5
                                   max-w-xl
                                   text-sm
                                   leading-6
                                   text-[#9da4ab]"
                        >
                            ${details.bio || "No bio available."}
                        </p>


                        <!-- Followers -->

                        <div
                            class="mt-5
                                   flex items-center
                                   gap-6
                                   text-sm"
                        >

                            <span>

                                <strong class="font-medium">
                                    ${details.followers}
                                </strong>

                                <span class="text-[#747b83]">
                                    followers
                                </span>

                            </span>


                            <span>

                                <strong class="font-medium">
                                    ${details.following}
                                </strong>

                                <span class="text-[#747b83]">
                                    following
                                </span>

                            </span>

                        </div>

                    </div>

                </div>


                <!-- REPOSITORY COUNT -->

                <div
                    class="mt-12
                           py-5
                           border-y border-[#20242a]
                           flex items-center
                           justify-between"
                >

                    <span
                        class="text-[10px]
                               uppercase
                               tracking-[0.16em]
                               text-[#626970]"
                    >
                        Repositories
                    </span>


                    <span
                        class="text-lg
                               font-medium"
                    >
                        ${details.public_repos}
                    </span>

                </div>


                <!-- TOP REPOSITORIES -->

                <section class="mt-12">

                    <h2
                        class="text-lg
                               font-medium
                               tracking-[-0.02em]"
                    >
                        Top repositories
                    </h2>


                    <div
                        class="mt-6
                               border-t border-[#20242a]"
                    >

                        ${repos.slice(0, 3).map(repo => `

                            <article
                                class="py-6
                                       border-b border-[#20242a]"
                            >

                                <h3 class="text-sm font-medium">
                                    ${repo.name}
                                </h3>


                                <p
                                    class="mt-2
                                           text-sm
                                           leading-6
                                           text-[#747b83]"
                                >
                                    ${repo.description || "No description available."}
                                </p>


                                <div
                                    class="mt-4
                                           flex items-center
                                           gap-5
                                           text-xs
                                           text-[#626970]"
                                >

                                    <span>
                                        ${repo.language || "Unknown"}
                                    </span>

                                    <span>
                                        ★ ${repo.stargazers_count}
                                    </span>

                                </div>

                            </article>

                        `).join("")}

                    </div>

                </section>

            </div>

        </section>

    `;


    // Put generated HTML into your page

    document.querySelector("#profile").innerHTML = data;

}


// ===============================
// BUTTON CLICK
// ===============================

button.addEventListener("click", () => {

    let username = input.value.trim();


    if (username.length > 0) {

        Promise.all([
            getProfileData(username),
            getTopRepos(username)
        ])

        .then(([profileData, repoData]) => {

            fillProfile(profileData, repoData);

        })

        .catch(error => {

            console.error(error);

            alert(error.message);

        });

    }

    else {

        alert("Please enter a GitHub username.");

    }

});
