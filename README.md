# Synonym Slash Command for MixMax
A slash command to quickly bring up a list of synonyms for a word. See https://mixmax.com/blog/giphy-slash-command for the example code this was based on.


### Typeahead
![typeahead](https://raw.githubusercontent.com/ssundarr3/synonym-slash-command/master/pics/typeahead.png)

### Resolver
![resolver](https://raw.githubusercontent.com/ssundarr3/synonym-slash-command/master/pics/resolver.png)

### How to Run
1. Git clone `https://github.com/ssundarr3/synonym-slash-command/edit/master/README.md`
2. Run `npm install` and `npm start`
3. Restart Chrome in a special temporary mode so the self-signed HTTPS urls can be loaded. https://developer.mixmax.com/docs/integration-api-appendix#local-development-error-neterr_insecure_response
4. Open the Mixmax dashboard (https://app.mixmax.com/dashboard/settings/integrations) and a slash command. (Name: 'Synonym', Command: 'synonym', Parameter Placeholder: '[search]', Typeahead API URL: 'https://localhost:9145/typeahead', Resolver API URL: 'https://localhost:9145/resolver'
5. Compose an email on GMail and type `/synonym word_here`

