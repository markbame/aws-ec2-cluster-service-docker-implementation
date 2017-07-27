module.exports = {
  apps : [
    {
      name      : 'react-app',
      env_production : {
        NODE_ENV: 'production'
      }
    },
    {
      name      : 'admin-app',
      env_production : {
        NODE_ENV: 'production'
      }
    },
    {
      name      : 'node-app',
      env_production : {
        NODE_ENV: 'production'
      }
    }

  ],
  deploy : {
    production_react_app : {
      user : 'ec2-user',
      host : 'localhost',
      ref  : 'origin/staging',
      repo : 'git@bitbucket.org:kv-newssocial/react-app.git',
      path : './react-app',
      'pre-setup': 'rm -rf react-app',
      'post-setup': 'npm install && npm run build',
      'post-deploy':'',
      "env"  : {
          "NODE_ENV": "production"
        }
    },
    production_admin_app : {
      user : 'ec2-user',
      host : 'localhost',
      ref  : 'origin/staging',
      repo : 'git@bitbucket.org:kv-newssocial/admin-app.git',
      path : './admin-app',
      'pre-setup': 'rm -rf admin-app',
      'post-setup': 'npm install && npm run build',
      'post-deploy':'',
    	     "env"  : {
	        "NODE_ENV": "production"
	      }
    },
    production_node_api : {
      user : 'ec2-user',
      host : 'localhost',
      ref  : 'origin/staging',
      repo : 'git@bitbucket.org:kv-newssocial/node-api.git',
      path : './node_api',
      'pre-setup': 'rm -rf node_api',
      'post-setup': 'npm install',
      'post-deploy':'docker exec -it ecs-ecscompose-react-docker2-33-workspace-e0e0d792f8fa80cd7e00 bash -c "cd /var/www/app/node_api/source && pm2 restart api"',
	    "env"  : {
        "NODE_ENV": "production"
      }
    }
  }
};
