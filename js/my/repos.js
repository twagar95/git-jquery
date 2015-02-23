function myRepos(full_name){

    console.log('listing repos')    
    
    $.get("https://api.github.com/users/twagar95/repos", github, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 

        // Q: Why is JSON.parse no longer necessary?
        var repos = data
        
        // Q. Why are these templates files stored in a separate folder inside contents/?
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: repos})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            myRepo(repos[0].full_name)

        })

    })
}