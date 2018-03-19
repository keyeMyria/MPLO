package com.mplo;

import com.reactnativenavigation.NavigationApplication;

import com.horcrux.svg.SvgPackage;
import java.util.Arrays;
import java.util.List;
import com.facebook.react.ReactPackage;

public class MainApplication extends NavigationApplication {

     @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }

     protected List<ReactPackage> getPackages() {
         // Add additional packages you require here
         // No need to add RnnPackage and MainReactPackage
         return Arrays.<ReactPackage>asList(
             new SvgPackage()
         );
     }

     @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }
     
     @Override
     public String getJSMainModuleName() {
         return "index";
     }
 }