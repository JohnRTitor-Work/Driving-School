{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv";

  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    mongodb-compass
  ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    pnpm.enable = true;
  };
  languages.typescript.enable = true;

  # https://devenv.sh/processes/
  # https://devenv.sh/services/
  services.mongodb.enable = true;

  # https://devenv.sh/scripts/
  scripts.launch-compass.exec = ''
    mongodb-compass --theme dark --ignore-additional-command-line-flags --enable-features=UseOzonePlatform --ozone-platform=x11 --password-store=gnome-libsecret
  '';

  enterShell = ''
    git --version
  '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
