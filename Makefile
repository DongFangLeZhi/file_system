usage:
	@echo ''
	@echo 'Core tasks                       : Description'
	@echo '---tasks-----------------             : -----------'
	@echo 'make setup       		              : Install all necessary dependencies'
	@echo 'makee dev  	                      : Start the local development server'
	@echo 'makeee test                        : Run tests'
	@echo 'make testem      				           : Run testem for client and server units'
	@echo 'make assets : Compile all the Stylus and Image'
	@echo ''
	@echo 'Additional tasks                 : Description'
	@echo '--------------------echo             : -----------'
	@echo 'make test-client                 : 	Run only clientient unit tests'
	@echo 'make test-server               	  : Run only serverrver unit tests'
	@echo 'make test-integration      	      : Run integrationtion tests only'
	@echo 'make tag               	          : Create a git tag for the current app version'
	@echo 'make 	clean                       : Clean up any dangling *.tmp files from bad NPM installs, old packages'
	@echo ''

setup:
	npm install

dev:
	$(MAKE) assets
	npm start

test:
	mocha /test

assets:
	@echo ''
	@echo 'Compiling Assets ...'
	@echo ''
	stylus ./public/stylus/*.styl -o ./public/stylesheets
	@echo ''
