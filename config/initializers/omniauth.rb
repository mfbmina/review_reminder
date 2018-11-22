Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github,
    ENV['GITHUB_CLIENT_ID'],
    ENV['GITHUB_SECRET_ID'],
    scope: "read:user,user:email,repo, write:repo_hook"
end
