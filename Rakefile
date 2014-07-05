require "rubygems"
require "rake"

desc "Compile CSS"
task :compile do
    system "sass basscss/basscss.scss:basscss.css --style expanded"
    system "sass basscss/basscss.scss:basscss.min.css --style compressed"
    system "sass basscss/basscss-lite.scss:basscss-lite.css --style expanded"
    system "sass basscss/basscss-lite.scss:basscss-lite.min.css --style compressed"
end # task :compile

task :dev do
  system "sass basscss:. docs/css:docs/css --watch"
end

