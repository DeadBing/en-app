plugins { id("com.android.application") }
android {
    namespace = "app.readwell.english"
    compileSdk = 36
    defaultConfig {
        applicationId = "app.readwell.english"
        minSdk = 26
        targetSdk = 36
        versionCode = 9
        versionName = "0.7.1"
    }
    buildFeatures { buildConfig = true }
    sourceSets { getByName("main").assets.srcDir("../../dist") }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
dependencies { implementation("androidx.webkit:webkit:1.12.1") }
tasks.register("checkWebAssets") {
    doLast {
        check(file("../../dist/index.html").exists()) { "Run npm run build from the project root first." }
    }
}
tasks.named("preBuild").configure { dependsOn("checkWebAssets") }
