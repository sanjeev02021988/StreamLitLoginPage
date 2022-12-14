import os
import streamlit as st
import streamlit.components.v1 as components
from PIL import Image

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_RELEASE = False

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.
parent_dir = os.path.dirname(os.path.abspath(__file__))

# Defining the favicon to be shown along with tab title 
assets_dir = os.path.join(parent_dir, "frontend/assets")
favicon = Image.open(assets_dir + "/images/favicon.png")

if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("login_page"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "login_page",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3000",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("login_page", path=build_dir)


# Create a wrapper function for the component. This is an optional
# best practice - we could simply expose the component function returned by
# `declare_component` and call it done. The wrapper allows us to customize
# our component's API: we can pre-process its input args, post-process its
# output value, and add a docstring for users.
def login_page():
    """Create a new instance of "login_page"."""
    # Call through to our private component function. Arguments we pass here
    # will be sent to the frontend, where they'll be available in an "args"
    # dictionary.
    #
    # "default" is a special argument that specifies the initial return
    # value of the component before the user has interacted with it.
    component_value = _component_func()

    # We could modify the value returned from the component if we wanted.
    # There's no need to do this in our simple example - but it's an option.
    return component_value

st.set_page_config(page_title='Samooha', page_icon=favicon, layout="wide")

with open(parent_dir + '/style.css') as f:
    st.markdown(f'<style>{f.read()}</style>', unsafe_allow_html=True)
    
# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run login_page/__init__.py`
if not _RELEASE:
    # Create an instance of our component with a constant `name` arg, and
    # print its output value.

    # Create a second instance of our component whose `name` arg will vary
    # based on a text_input widget.
    #
    # We use the special "key" argument to assign a fixed identity to this
    # component instance. By default, when a component's arguments change,
    # it is considered a new instance and will be re-mounted on the frontend
    # and lose its current state. In this case, we want to vary the component's
    # "name" argument without having it get recreated.
    login_page()
else: 
    login_page()
    
