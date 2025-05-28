import React from "react"
import { Link } from "react-router-dom"
import './squat_buddy.css'

function DPPost() {
    return (
        <div className="squat-buddy-container">
            <div className="back-link">
                <Link to="/projects">← Back to Projects & Blog</Link>
            </div>
            
            <header className="project-header">
                <h1>How to Actually Get Good at Dynamic Programming Problems</h1>
                <p className="subtitle">A comprehensive guide to mastering dynamic programming through structured learning</p>
            </header>

            <div className="project-content">
                <section className="overview">
                    <p>
                        I can't tell you how many times I have tried cracking the Neetcode Blind 75 dynamic programming section, gone through the solutions, and have still been unable to understand how to solve dynamic programming questions. I've read through countless reddit posts, forums, and have almost tried searching for algorithms courses to try to kickstart for the nth time my DP learning strategy.
                    </p>
                    <p>
                        Oftentimes I find the the conventionally available resources, i.e. the <a href="https://neetcode.io/practice?tab=blind75" target="_blank" rel="noopener noreferrer">Neetcode blind 75</a>, doesn't provide enough nuance for each question for you to be able to actually learn to solve DP. The issue that I have seen for DP questions is that people often talk at a very high level the "structure of a DP question," and then proceed to formulate the solution, almost like it's magic. I feel myself following one of those meme-drawing tutorials.
                    </p>
                    <img 
                        src="https://img-9gag-fun.9cache.com/photo/abbRYwv_460s.jpg" 
                        alt="Every drawing tutorial ever"
                        className="system-diagram"
                    />
                    <p>
                    The issue is that the resources that are immediately available online don’t actually get to the crux of how DP problems are structured. I’ll go through some of the resources and learning tricks that I was able to extract that helped me be able to solve DP problems unassisted, and have a fighting chance at solving DP hard questions.
                    </p>
                </section>


                <section className="learnings">
                    <h2>Key Resources</h2>
                    <p>To solve this, I used the following resources to figure out a strategy to actually get competent to solve DP problems:</p>
                    <ul>
                        <li>
                            <strong>CS 170 Chapter:</strong> Start by reading <a href="https://people.eecs.berkeley.edu/~vazirani/algorithms/chap6.pdf" target="_blank" rel="noopener noreferrer">this chapter</a> from the CS 170 page from UC Berkeley
                        </li>
                        <li>
                            <strong>LeetCode Forum Post:</strong> Go through <a href="https://leetcode.com/discuss/post/458695/dynamic-programming-patterns-by-aatalyk-pmgr/#distinct-ways" target="_blank" rel="noopener noreferrer">this leetcode forum post</a>
                        </li>
                    </ul>
                </section>

                <section className = "resourceExplanation">
                    <p>
                    The EECS chapter goes in good detail on the essence of solving dynamic programming question. I spent a lot of time understanding how they built the understanding of the DAG was constructed for each problem, and how the built their logic step-by-step for arriving at the solution. This helped me get from knowing absolutely nothing, to stepping up to the plate to be able to understand "where to start" when approaching a DP question.
                    </p>
                </section>

                <section className="features">
                    <h2>Types of DP Problems</h2>
                    <ul>
                        <li><strong>Minimizing/Maximizing (Optimization)</strong></li>
                        <li><strong>Number of Times (Counting)</strong></li>
                        <li><strong>String DP</strong> (e.g. Longest Common Subsequence)</li>
                        <li><strong>Decision Making</strong> (e.g. House Robber)</li>
                        <li><strong>Interval DP</strong></li>
                    </ul>
                </section>

                <section className="in-progress">
                    <h2>Recommended Practice Problems</h2>
                    <ul>
                        <li>
                            <strong>The basics:</strong> <a href="https://leetcode.com/problems/coin-change/" target="_blank" rel="noopener noreferrer">Coin Change</a>, <a href="https://leetcode.com/problems/unique-paths/" target="_blank" rel="noopener noreferrer">Unique Ways</a>, <a href="https://leetcode.com/problems/minimum-path-sum/" target="_blank" rel="noopener noreferrer">Minimum Path Sum</a> 
                            <p>These are some of the first problems you think of when people mention DP. Really try understanding the solution here, and how states can be represented in 1D, and 2D, and how they can be expressed in more dimensions.</p>
                        </li>
                        <li>
                            <strong>State management and representation:</strong> <a href="https://leetcode.com/problems/perfect-squares/" target="_blank" rel="noopener noreferrer">Perfect Squares</a>, <a href="https://leetcode.com/problems/longest-palindromic-subsequence/" target="_blank" rel="noopener noreferrer">Longest Palindromic Subsequence</a>, <a href="https://leetcode.com/problems/regular-expression-matching/" target="_blank" rel="noopener noreferrer">Regex Matching</a>
                            <p>
                                I got a better understanding of how keeping track of multiple states and how they work together.
                            </p>
                        </li>
                        <li>
                            <strong>Weird problems:</strong> <a href="https://leetcode.com/problems/target-sum/" target="_blank" rel="noopener noreferrer">Target Sum</a> and any stock-related problem
                        </li>
                    </ul>
                </section>

                <section className="system-design">
                    <h2>Study Tips</h2>
                    <ul>
                        <li>
                            <strong>Tip 1:</strong> Write all of your solutions down, and use spaced repetition to go back and solve problems that you missed.
                        </li>
                        <p>Walk through the solution fully, go through the top down and bottom up solutions, and break down the DP problem into their parts. Just like an Chemistry or Biology exam, there's going to be a bit of memorization that has to be done on your end here.</p>
                        <li>
                            <strong>Tip 2:</strong> Break down the problem into the states, subproblem, and then the recurrence relation, in that order.
                            <p>
                            Explicitly writing these things down helped me dramatically. I was able to walk through the problem in my head, writing everything down in the docstring, and was able to execute on the ideas and notes that I had written down by walking through:
                                1. What states am I keeping track of? What does the decision tree/graph look like?
                                2. Now, what is the subproblem that I am solving? How does this tie into the states that I am keeping track of? Can I express this idea in plain english?
                                3. Next, what is the recurrence relation, and what does the pseudocode look like for this?
                                4. Finally, what are the base cases?
                            </p>
                        </li>
                        <li>
                            <strong>Tip 3:</strong> Go through and solve both top down and bottom up approaches.
                            <p>
                                This will equip you for both situations when top down or bottom up makes the most sense when your facing the pressure of solving a DP problem live.
                            </p>
                        </li>
                    </ul>
                </section>

                <section>
                    <p>Hope this article is helpful at either kickstarting, or re-kickstarting your DP studying. Please feel free to shoot me an email with any suggestions, or reviews for any problems that you would like me to cover. Happy studying!</p>
                </section>
            </div>
        </div>
    )
}

export default DPPost;