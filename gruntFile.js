// module.exports = function(grunt) {
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),

//         // Configuração da tarefa LESS
//         less: {
//             development: {
//                 files: {
//                     'dev/styles/main.css': 'src/styles/main.less'
//                 }
//             },
//             production: {
//                 options: {
//                     compress: true, // Aplica compressão para produção
//                 },
//                 files: {
//                     'dist/styles/main.min.css': 'src/styles/main.less'
//                 }
//             }
//         },

//         // Configuração da tarefa Watch
//         watch: {
//             styles: {
//                 files: ['src/styles/**/*.less'], // Monitora arquivos LESS
//                 tasks: ['less:development'],    // Executa a tarefa LESS em desenvolvimento
//                 options: {
//                     spawn: false,
//                 },
//             },
//             html: {
//                 files: ['src/index.html'], // Monitora alterações no HTML
//                 tasks: ['replace:dev']
//             }
//         },

//         // Configuração da tarefa Replace
//         replace: {
//             dev: {
//                 options: {
//                     patterns: [
//                         {
//                             match: 'ENDERCO-DE-CSS',
//                             replacement: './styles/main.css' // Atualiza o caminho do CSS no HTML para desenvolvimento
//                         },
//                         {
//                             match: 'ENDERCO-DE-JS',
//                             replacement: '../src/scripts/main.js' // Atualiza o caminho do JS no HTML para desenvolvimento
//                         }
//                     ]
//                 },
//                 files: [
//                     {
//                         expand: true,
//                         flatten: true,
//                         src: ['src/index.html'], // Arquivo de origem
//                         dest: 'dev/'             // Destino do HTML modificado
//                     }
//                 ]
//             },
//             dist: {
//                 options: {
//                     patterns: [
//                         {
//                             match: 'ENDERCO-DE-CSS',
//                             replacement: './styles/main.min.css' // Atualiza o caminho do CSS no HTML para produção
//                         },
//                         {
//                             match: 'ENDERCO-DE-JS',
//                             replacement: './scripts/main.min.js' // Updates JS for production
//                         }
//                     ]
//                 },
//                 files: [
//                     {
//                         expand: true,
//                         flatten: true,
//                         src: ['prebuild/index.html'], // Arquivo de origem
//                         dest: 'dist/'                // Destino do HTML modificado
//                     }
//                 ]
//             }
//         },

//         // Configuração da tarefa HTMLMin
//         htmlmin: {
//             dist: {
//                 options: {
//                     removeComments: true,
//                     collapseWhitespace: true, // Minifica o HTML
//                 },
//                 files: {
//                     'prebuild/index.html': 'src/index.html'
//                 }
//             }
//         },

//         // Configuração da tarefa Clean
//         clean: {
//             options: {
//                 force: true // Permite exclusão fora do diretório atual
//             },
//             src: ['prebuild'],
//         },

//         uglify: {
//             target: {
//                 files: {
//                     'dis/scripts/main.min.js': 'src/scripts/main.js'
//                 }
//             }
//         },

//         // Configuração da tarefa Connect (Servidor Local)
//         connect: {
//             server: {
//                 options: {
//                     port: 9000,                 // Porta do servidor
//                     base: 'dev',               // Diretório para servir arquivos (dev environment)
//                     keepalive: true,           // Mantém o servidor ativo
//                     open: true,                // Abre automaticamente o navegador
//                     livereload: true           // Ativa LiveReload
//                 }
//             }
//         }
//     });

//     // Carregar os plugins necessários
//     grunt.loadNpmTasks("grunt-contrib-less");
//     grunt.loadNpmTasks("grunt-contrib-watch");
//     grunt.loadNpmTasks("grunt-replace");
//     grunt.loadNpmTasks("grunt-contrib-htmlmin");
//     grunt.loadNpmTasks("grunt-contrib-clean");
//     grunt.loadNpmTasks("grunt-contrib-connect"); // Novo plugin para servidor
//     grunt.loadNpmTasks("grunt-contrib-uglify");

//     // Registrar tarefas
//     grunt.registerTask('default', ["less:development", "replace:dev"]);
//     grunt.registerTask('build', ["clean", "less:production", "htmlmin:dist", "replace:dist", "uglify"]);
//     grunt.registerTask('watch-styles', ['watch']);
//     grunt.registerTask('serve', ['connect:server']); // Tarefa para iniciar o servidor
// };






module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // LESS Task
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true, // Compress output for production
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        // Watch Task
        watch: {
            styles: {
                files: ['src/styles/**/*.less'], // Watch for LESS changes
                tasks: ['less:development'],    // Run development LESS task
                options: {
                    spawn: false,
                    livereload: true // Enable LiveReload
                },
            },
            html: {
                files: ['src/index.html'], // Watch for HTML changes
                tasks: ['replace:dev'],
                options: {
                    livereload: true // Enable LiveReload
                }
            }
        },

        // Replace Task
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERCO-DE-CSS',
                            replacement: './styles/main.css' // CSS path for dev
                        },
                        {
                            match: 'ENDERCO-DE-JS',
                            replacement: '../src/scripts/main.js' // JS path for dev
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'], // Source HTML
                        dest: 'dev/'             // Destination HTML
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERCO-DE-CSS',
                            replacement: './styles/main.min.css' // CSS path for production
                        },
                        {
                            match: 'ENDERCO-DE-JS',
                            replacement: './scripts/main.min.js' // JS path for production
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'], // Source HTML
                        dest: 'dist/'                // Destination HTML
                    }
                ]
            }
        },

        // HTMLMin Task
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true, // Minify HTML
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        // Clean Task
        clean: {
            src: ['prebuild/**/*'], // Clean the contents of the prebuild directory
        },

        // Uglify Task
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js' // Minify JS
                }
            }
        },

        // Local Server Task
        connect: {
            server: {
                options: {
                    port: 5500,                 // Server port
                    base: 'dev',               // Base directory for dev environment
                    keepalive: true,           // Keep server running
                    open: true,                // Open in browser
                    livereload: true           // Enable LiveReload
                }
            }
        }
    });
    

    // Load Plugins
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-connect");

    // Register Tasks
    grunt.registerTask('default', ["less:development", "replace:dev", "serve", "watch"]);
    grunt.registerTask('build', ["clean", "less:production", "htmlmin:dist", "replace:dist", "uglify"]);
    grunt.registerTask('watch-styles', ['watch']);
    grunt.registerTask('serve', ['connect:server']); // Start the server
};

